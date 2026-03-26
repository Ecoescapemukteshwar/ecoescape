import { useState, useRef, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { BlogCard } from "@/components/BlogCard";
import { BlogCardSkeleton } from "@/components/BlogCardSkeleton";
import { blogPosts } from "@/config/blog-posts";
import { useInViewCallback } from "@/hooks/useInViewCallback";

const POSTS_PER_PAGE = 10;

export default function Blog() {
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  // Track latest state in ref so callback stays stable
  const visibleCountRef = useRef(visibleCount);
  useEffect(() => {
    visibleCountRef.current = visibleCount;
  }, [visibleCount]);

  const loadMore = useCallback(() => {
    if (visibleCountRef.current >= blogPosts.length) return;
    setVisibleCount((prev) => Math.min(prev + POSTS_PER_PAGE, blogPosts.length));
  }, []);

  const sentinelRef = useInViewCallback(loadMore, {
    threshold: 0,
    rootMargin: '200px',
  });

  const visiblePosts = blogPosts.slice(0, visibleCount);
  const hasMore = visibleCount < blogPosts.length;

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Mukteshwar Travel Blog | Local Guides, Tips & Hidden Gems - Ecoescape"
        description="Plan your ultimate Himalayan escape with our Mukteshwar travel blog. Expert guides on weather, trekking trails, local Kumaoni food, and must-visit attractions in 2026."
        canonical="https://ecoescapemukteshwar.com/blog"
        keywords="Mukteshwar travel blog, Mukteshwar guide, Mukteshwar travel tips, trekking in Mukteshwar, Kumaoni food guide, best time to visit Mukteshwar"
      />
      <Header />
      <main className="pt-40 pb-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
              Mukteshwar Travel Blog
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Local guides, travel tips, and everything you need to plan the perfect Mukteshwar getaway.
            </p>
          </div>

          <div className="grid gap-8">
            {visiblePosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}

            {hasMore && (
              <div ref={sentinelRef} className="py-4">
                <BlogCardSkeleton />
              </div>
            )}

            {!hasMore && blogPosts.length > 0 && (
              <div className="text-center mt-12 text-muted-foreground py-8 border-t border-border">
                <p className="text-sm">
                  Showing all {blogPosts.length} posts
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
