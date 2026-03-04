import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { ChevronLeft, Share } from "lucide-react";

interface Photo {
  src: string;
  alt: string;
}

interface Room {
  id: string;
  name: string;
  photos: Photo[];
}

export function PhotoTour() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [activeRoomId, setActiveRoomId] = useState<string>("");
  const thumbnailStripRef = useRef<HTMLDivElement>(null);

  // Dynamically load all images from PhotoTour folder
  useEffect(() => {
    // Import all webp images from PhotoTour folder
    const imageModules = import.meta.glob('/public/PhotoTour/**/*.webp', { eager: true });

    // Group images by folder
    const folderMap = new Map<string, Photo[]>();

    Object.entries(imageModules).forEach(([path, module]: [string, any]) => {
      // Extract folder name and image number from path
      // Path format: /public/PhotoTour/Folder Name/imgX.webp
      const match = path.match(/\/PhotoTour\/([^/]+)\/img(\d+)\.webp/);

      if (match) {
        const [, folderName, imageNumber] = match;

        if (!folderMap.has(folderName)) {
          folderMap.set(folderName, []);
        }

        folderMap.get(folderName)!.push({
          src: path.replace('/public', ''),
          alt: `${folderName} Photo ${imageNumber}`
        });
      }
    });

    // Sort photos by image number in each folder
    folderMap.forEach((photos) => {
      photos.sort((a, b) => {
        const numA = parseInt(a.alt.match(/Photo (\d+)$/)?.[1] || '0');
        const numB = parseInt(b.alt.match(/Photo (\d+)$/)?.[1] || '0');
        return numA - numB;
      });
    });

    // Convert to rooms array
    const roomsArray: Room[] = Array.from(folderMap.entries()).map(([name, photos]) => ({
      id: name.toLowerCase().replace(/\s+/g, '-'),
      name,
      photos
    }));

    setRooms(roomsArray);
    if (roomsArray.length > 0) {
      setActiveRoomId(roomsArray[0].id);
    }
  }, []);

  // Set active room and scroll thumbnail into view
  const setActiveRoom = useCallback((roomId: string) => {
    setActiveRoomId(roomId);

    // Scroll thumbnail into view
    const thumbnail = document.querySelector(`[data-thumbnail-room="${roomId}"]`);
    if (thumbnail && thumbnailStripRef.current) {
      thumbnail.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, []);

  // Scroll to room section
  const scrollToRoom = useCallback((roomId: string) => {
    const section = document.getElementById(`section-${roomId}`);
    if (section) {
      const yOffset = -200; // Account for fixed elements
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveRoom(roomId);
    }
  }, [setActiveRoom]);

  // Setup Intersection Observer for scroll-spy
  useEffect(() => {
    if (rooms.length === 0) return;

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const roomId = entry.target.dataset.roomId;
          if (roomId) {
            setActiveRoomId(roomId);

            // Scroll thumbnail into view
            const thumbnail = document.querySelector(`[data-thumbnail-room="${roomId}"]`);
            if (thumbnail && thumbnailStripRef.current) {
              thumbnail.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
            }
          }
        }
      });
    }, options);

    // Observe each room section
    document.querySelectorAll(".room-section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [rooms.length]);

  // Keyboard handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        window.history.back();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Ecoescape Mukteshwar",
        url: window.location.href,
      });
    }
  };

  // Show loading state while rooms are being loaded
  if (rooms.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#222222] mx-auto mb-4"></div>
          <p className="text-[#222222]">Loading photos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ==================== ZONE 1 — TOP BAR ==================== */}
      <div className="fixed top-0 left-0 right-0 h-14 bg-white z-50 flex items-center justify-between px-4 border-b border-[#EEEEEE] shadow-sm">
        <button
          onClick={() => window.history.back()}
          className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6 text-[#222222]" />
        </button>
        <button
          onClick={handleShare}
          className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
          aria-label="Share"
        >
          <Share className="w-5 h-5 text-[#222222]" />
        </button>
      </div>

      {/* ==================== ZONE 2 — THUMBNAIL STRIP ==================== */}
      <div
        ref={thumbnailStripRef}
        className="fixed top-14 left-0 right-0 h-[140px] bg-white z-40 border-b border-[#DDDDDD] overflow-x-auto overflow-y-hidden flex items-center px-4 gap-3 scrollbar-hide"
      >
        {rooms.map((room) => (
          <button
            key={room.id}
            data-thumbnail-room={room.id}
            onClick={() => scrollToRoom(room.id)}
            className={`flex-shrink-0 w-36 flex flex-col gap-2 cursor-pointer transition-opacity ${
              activeRoomId === room.id ? "opacity-100" : "opacity-70"
            }`}
          >
            <div
              className={`w-36 h-[110px] rounded-xl overflow-hidden border-2 transition-colors ${
                activeRoomId === room.id ? "border-black" : "border-transparent"
              }`}
            >
              <img
                src={room.photos[0]?.src || ""}
                alt={room.name}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <span className="text-sm text-[#222222] font-medium text-left px-0.5">
              {room.name}
            </span>
          </button>
        ))}
      </div>

      {/* ==================== ZONE 3 — DIVIDER ==================== */}
      <div className="h-px bg-[#DDDDDD] w-full fixed top-[196px] left-0 right-0 z-30" />

      {/* ==================== ZONE 4 — MAIN CONTENT ==================== */}
      <div className="pt-[200px]">
        {rooms.map((room, roomIndex) => (
          <div
            key={room.id}
            id={`section-${room.id}`}
            data-room-id={room.id}
            className="room-section"
          >
            {/* Room Section Header */}
            <h2 className="text-2xl font-bold text-[#222222] px-[15px] pt-5 pb-3 md:px-6 md:text-3xl">
              {room.name}
            </h2>

            {/* Photos - stacked vertically with padding on mobile */}
            <div className="flex flex-col md:flex md:flex-row md:flex-wrap md:gap-3 px-[15px] md:px-6">
              {room.photos.map((photo, photoIndex) => (
                <img
                  key={`${room.id}-${photoIndex}`}
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full m-[2px] mb-[10px] rounded-xl md:m-0 md:w-[calc(33.333%-8px)]"
                  loading={roomIndex === 0 && photoIndex === 0 ? "eager" : "lazy"}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
