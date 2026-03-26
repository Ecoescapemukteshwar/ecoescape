export function BlogCardSkeleton() {
  return (
    <div className="bg-card rounded-2xl overflow-hidden flex flex-col sm:flex-row animate-pulse">
      <div className="sm:w-72 aspect-video bg-muted flex-shrink-0" />
      <div className="p-6 flex flex-col justify-between flex-1">
        <div className="space-y-4">
          <div className="h-4 bg-muted rounded w-20" />
          <div className="h-6 bg-muted rounded w-3/4" />
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded" />
            <div className="h-4 bg-muted rounded w-5/6" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-4">
            <div className="h-3.5 bg-muted rounded w-16" />
            <div className="h-3.5 bg-muted rounded w-12" />
          </div>
          <div className="h-4 bg-muted rounded w-16" />
        </div>
      </div>
    </div>
  );
}
