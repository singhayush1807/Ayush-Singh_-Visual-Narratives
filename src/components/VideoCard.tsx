import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type VideoKind = "shorts" | "longform";

export type VideoCardProps = {
  videoId: string;
  title: string;
  kind: VideoKind;
  thumbnailOverride?: string | null;
  className?: string;
};

export function VideoCard({
  videoId,
  title,
  kind,
  thumbnailOverride = null,
  className,
}: VideoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState(false);
  const [shouldLoadThumbnail, setShouldLoadThumbnail] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const isShort = kind === "shorts";
  const fallbackThumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const preferredThumbnailUrl =
    thumbnailOverride ?? `https://i.ytimg.com/vi_webp/${videoId}/hqdefault.webp`;
  const [thumbnailUrl, setThumbnailUrl] = useState(preferredThumbnailUrl);

  useEffect(() => {
    setPlay(false);
    setShouldLoadThumbnail(false);
    setImageLoaded(false);
    setThumbnailUrl(preferredThumbnailUrl);
  }, [preferredThumbnailUrl, videoId]);

  useEffect(() => {
    if (shouldLoadThumbnail || typeof window === "undefined") return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoadThumbnail(true);
      return;
    }

    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setShouldLoadThumbnail(true);
        observer.disconnect();
      },
      { rootMargin: "300px 0px", threshold: 0.01 },
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [shouldLoadThumbnail]);

  const startPlayback = () => setPlay(true);

  const handleImageError = () => {
    if (!thumbnailOverride && thumbnailUrl !== fallbackThumbnailUrl) {
      setThumbnailUrl(fallbackThumbnailUrl);
      return;
    }
    setImageLoaded(true);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (play || (event.key !== "Enter" && event.key !== " ")) return;
    event.preventDefault();
    startPlayback();
  };

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16, scale: 0.97 }}
      whileHover={play ? undefined : { scale: 1.018 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      role={play ? undefined : "button"}
      data-video-card
      tabIndex={play ? undefined : 0}
      aria-label={play ? undefined : `Play ${title}`}
      onClick={play ? undefined : startPlayback}
      onKeyDown={onKeyDown}
      className={cn(
        "group relative paper-card overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_var(--forest)] transition-all",
        isShort ? "aspect-[9/16]" : "aspect-video",
        play && "cursor-default",
        className,
      )}
    >
      {play ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          sandbox="allow-scripts allow-same-origin allow-presentation"
          allowFullScreen
        />
      ) : (
        <>
          {(!shouldLoadThumbnail || !imageLoaded) && (
            <Skeleton className="absolute inset-0 h-full w-full rounded-none bg-primary/15" />
          )}
          {shouldLoadThumbnail ? (
            <img
              src={thumbnailUrl}
              alt={title}
              loading="lazy"
              decoding="async"
              onLoad={() => setImageLoaded(true)}
              onError={handleImageError}
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105",
                imageLoaded ? "opacity-100" : "opacity-0",
              )}
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/10 to-transparent" />
          <div className="absolute inset-0 grid place-items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="grid place-items-center h-16 w-16 rounded-full bg-cream/90 backdrop-blur border border-cream shadow-soft"
            >
              <Play className="h-6 w-6 text-primary fill-primary translate-x-0.5" />
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-cream">
            <div className="text-xs uppercase tracking-widest opacity-70">
              {isShort ? "Shorts" : "Long-form"}
            </div>
            <div className="font-display text-lg mt-1 line-clamp-2">{title}</div>
          </div>
        </>
      )}
    </motion.div>
  );
}
