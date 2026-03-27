import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { ArrowLeft } from "lucide-react";

/**
 * BlogPostLayout Component
 *
 * A reusable layout wrapper for blog posts that handles all repetitive structure:
 * - SEO meta tags
 * - Schema.org structured data
 * - Header and Footer
 * - Breadcrumb navigation
 * - Content wrapper with consistent styling
 *
 * This reduces each blog page from ~700 lines to ~200 lines of content only.
 *
 * @example
 * ```tsx
 * <BlogPostLayout
 *   meta={{
 *     title: "Kumaoni Food Guide",
 *     description: "Discover authentic Kumaoni cuisine...",
 *     canonical: "/blog/kumaoni-food-guide",
 *     keywords: "Kumaoni food, Mukteshwar restaurants..."
 *   }}
 *   schema={{
 *     article: articleSchema,
 *     breadcrumb: breadcrumbSchema,
 *     additional: [restaurantSchema]
 *   }}
 *   backLink="/blog"
 * >
 *   <YourBlogContent />
 * </BlogPostLayout>
 * ```
 */
export interface BlogPostLayoutProps {
  /** SEO metadata for the page */
  meta: {
    title: string;
    description: string;
    canonical?: string;
    keywords?: string;
    ogImage?: string;
  };
  /** Schema.org structured data */
  schema: {
    article: Record<string, unknown>;
    breadcrumb: Record<string, unknown>;
    additional?: Record<string, unknown>[];
  };
  /** Back link for breadcrumb navigation (defaults to /blog) */
  backLink?: string;
  /** Back link text (defaults to "Back to Blog") */
  backLinkText?: string;
  /** Blog post content */
  children: React.ReactNode;
}

export function BlogPostLayout({
  meta,
  schema,
  backLink = "/blog",
  backLinkText = "Back to Blog",
  children,
}: BlogPostLayoutProps) {
  // Combine all schemas into an array
  const allSchemas = schema.additional
    ? [schema.article, schema.breadcrumb, ...schema.additional]
    : [schema.article, schema.breadcrumb];

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        keywords={meta.keywords}
        ogImage={meta.ogImage}
        jsonLd={allSchemas}
      />
      <Header />
      <main className="pt-28 pb-20">
        <article className="container max-w-3xl">
          {/* Breadcrumb */}
          <Link
            to={backLink}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {backLinkText}
          </Link>

          {/* Blog Content */}
          {children}
        </article>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default BlogPostLayout;
