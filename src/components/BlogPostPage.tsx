import { useParams, Link } from "react-router-dom";
import { Suspense } from "react";
import { getBlogComponent } from "@/pages/blog/index";

/**
 * BlogPostPage Component
 *
 * Dynamically loads and renders the appropriate blog post component
 * based on the URL slug parameter.
 *
 * This component enables dynamic routing for all blog posts,
 * eliminating the need for individual route declarations in App.tsx.
 *
 * @example
 * In App.tsx:
 * <Route path="/blog/:slug" element={<BlogPostPage />} />
 *
 * URL: /blog/kumaoni-food-guide
 * → Loads and renders KumaoniFoodGuide component
 */
export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <BlogNotFound />;
  }

  // Get the blog component for this slug
  const BlogComponent = getBlogComponent(slug);

  if (!BlogComponent) {
    return <BlogNotFound />;
  }

  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <BlogComponent />
    </Suspense>
  );
}

/**
 * Blog Not Found Component
 *
 * Displayed when a blog post doesn't exist
 */
function BlogNotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl font-serif font-semibold text-foreground mb-4">
          Blog Post Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Back to Blog
        </Link>
      </div>
    </div>
  );
}
