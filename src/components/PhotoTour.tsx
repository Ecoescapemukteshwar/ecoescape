import { useRef, useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

interface PhotoTourProps {
  suiteName?: string;
}

export function PhotoTour({ suiteName }: PhotoTourProps) {
  const { suite: suiteParam } = useParams<{ suite: string }>();
  const navigate = useNavigate();
  const [rooms, setRooms] = useState<Room[]>([]);
  const [activeRoomId, setActiveRoomId] = useState<string>("");
  const thumbnailStripRef = useRef<HTMLDivElement>(null);

  // Determine which suite to load
  // Convert URL-friendly format back to original folder name
  const urlSuite = suiteName || suiteParam || "";
  const currentSuite = urlSuite ? fromUrlFriendly(urlSuite) : "";

  // Dynamically load all images from the specific suite folder
  useEffect(() => {
    // Import all webp images from PhotoTour folder (all suites) in src directory
    const imageModules = import.meta.glob('@/assets/PhotoTour/**/*.webp', {
      eager: true
    });

    console.log('[PhotoTour] Loading images for suite:', currentSuite);
    console.log('[PhotoTour] Total image modules found:', Object.keys(imageModules).length);

    // Group images by suite and room
    const suiteFolderMap = new Map<string, Map<string, Photo[]>>();

    Object.entries(imageModules).forEach(([path, module]: [string, any]) => {
      // Extract suite name, room folder name and image number from path
      // Path format: /assets/PhotoTour/Suite Name/Room Name/imgX.webp
      const match = path.match(/\/assets\/PhotoTour\/([^/]+)\/([^/]+)\/(?:img)?(\d+)\.webp/);

      if (match) {
        const [, suiteName, roomName, imageNumber] = match;

        if (!suiteFolderMap.has(suiteName)) {
          suiteFolderMap.set(suiteName, new Map());
        }

        const roomMap = suiteFolderMap.get(suiteName)!;
        if (!roomMap.has(roomName)) {
          roomMap.set(roomName, []);
        }

        // Use the default export which is the module
        roomMap.get(roomName)!.push({
          src: module.default,
          alt: `${roomName} Photo ${imageNumber}`
        });
      }
    });

    console.log('[PhotoTour] Suites discovered:', Array.from(suiteFolderMap.keys()));
    console.log('[PhotoTour] Looking for suite:', currentSuite);

    // If no suite specified or suite not found, show no rooms
    if (!currentSuite || !suiteFolderMap.has(currentSuite)) {
      console.log('[PhotoTour] Suite not found or no suite specified');
      setRooms([]);
      return;
    }

    // Get the current suite's room map
    const roomMap = suiteFolderMap.get(currentSuite)!;
    console.log('[PhotoTour] Rooms found for suite:', Array.from(roomMap.keys()));

    // Sort photos by image number in each folder
    roomMap.forEach((photos) => {
      photos.sort((a, b) => {
        const numA = parseInt(a.alt.match(/Photo (\d+)$/)?.[1] || '0');
        const numB = parseInt(b.alt.match(/Photo (\d+)$/)?.[1] || '0');
        return numA - numB;
      });
    });

    // Convert to rooms array
    const roomsArray: Room[] = Array.from(roomMap.entries()).map(([name, photos]) => ({
      id: name.toLowerCase().replace(/\s+/g, '-'),
      name,
      photos
    }));

    console.log('[PhotoTour] Final rooms array:', roomsArray);
    setRooms(roomsArray);
    if (roomsArray.length > 0) {
      setActiveRoomId(roomsArray[0].id);
    }
  }, [currentSuite]);

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

// Helper function to get all available suites (synchronous)
export function getAvailableSuitesSync(): string[] {
  const imageModules = import.meta.glob('@/assets/PhotoTour/**/*.webp', {
    eager: true
  });
  const suites = new Set<string>();

  Object.entries(imageModules).forEach(([path]: [string, any]) => {
    const match = path.match(/\/assets\/PhotoTour\/([^/]+)\//);
    if (match) {
      suites.add(match[1]);
    }
  });

  const suitesArray = Array.from(suites).sort();
  console.log('[getAvailableSuitesSync] Suites found:', suitesArray);
  return suitesArray;
}

// Helper function to convert suite name to URL-friendly format
export function toUrlFriendly(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}

// Helper function to convert URL-friendly format back to suite name
export function fromUrlFriendly(slug: string): string {
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Helper function to get suite nav items (for dropdown)
export function getSuiteNavItems(): Array<{ name: string; href: string }> {
  return getAvailableSuitesSync().map(suite => ({
    name: suite,
    href: `/gallery/${toUrlFriendly(suite)}`
  }));
}
