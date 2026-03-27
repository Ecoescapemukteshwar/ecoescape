import { memo } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/config/blog-posts";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = memo(function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col sm:flex-row"
    >
      <div className="sm:w-72 aspect-video bg-muted flex-shrink-0 overflow-hidden">
        <img
          src={post.image}
          alt={post.imageAlt || post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width={288}
          height={162}
          sizes="(max-width: 640px) 100vw, 288px"
        />
      </div>
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            {post.category}
          </span>
          <h2 className="text-xl font-serif font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {post.excerpt}
          </p>
        </div>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>
          <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            Read <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
});
