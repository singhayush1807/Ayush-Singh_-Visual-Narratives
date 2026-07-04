import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring, animate } from "framer-motion";
import {
  Play,
  ArrowRight,
  ArrowUpRight,
  Youtube,
  Instagram,
  MessageCircle,
  Sparkles,
  Film,
  Wand2,
  Palette,
  Music,
  Type,
  Zap,
  Mail,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

/* ---------------- Reveal wrapper ---------------- */
function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Magnetic button ---------------- */
function Magnetic({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.25);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.25);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={"inline-block " + className}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Count-up ---------------- */
function CountUp({ to, suffix = "", duration = 2.2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  const format = (n: number) => {
    if (to >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
    if (to >= 1_000) return Math.round(n / 100) / 10 + "K";
    return Math.round(n).toString();
  };

  return (
    <span ref={ref}>
      {format(val)}
      {suffix}
    </span>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-tight text-primary">
          Ayush<span className="text-accent">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          {[
            ["About", "#about"],
            ["Work", "#work"],
            ["Journey", "#journey"],
            ["Contact", "#contact"],
          ].map(([l, h]) => (
            <a
              key={l}
              href={h}
              className="relative hover:text-primary transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
            >
              {l}
            </a>
          ))}
        </nav>
        <Magnetic>
          <a href="#contact" className="pill-btn text-sm hover:bg-primary hover:text-primary-foreground">
            Hire me <ArrowUpRight className="h-4 w-4" />
          </a>
        </Magnetic>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen pt-36 pb-24 overflow-hidden">
      {/* parallax shapes */}
      <motion.div
        style={{ y: y1 }}
        className="pointer-events-none absolute -top-20 -left-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-float"
      />
      <motion.div
        style={{ y: y2 }}
        className="pointer-events-none absolute top-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl animate-float"
      />
      {/* grain */}
      <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-multiply animate-grain [background-image:url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22200%22%20height=%22200%22><filter%20id=%22n%22><feTurbulence%20baseFrequency=%220.85%22%20numOctaves=%222%22/></filter><rect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23n)%22%20opacity=%220.35%22/></svg>')]" />

      <motion.div style={{ opacity }} className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-primary/70 mb-8">
            <span className="h-px w-10 bg-primary/40" />
            Portfolio · 2025
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="font-display text-[clamp(3rem,10vw,9rem)] leading-[0.95] text-primary">
            Ayush <em className="font-normal italic text-accent">Singh</em>
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-display text-2xl md:text-3xl text-foreground/80 italic">
            <span>Video Editor</span>
            <span className="text-accent">•</span>
            <span>Motion Designer</span>
            <span className="text-accent">•</span>
            <span>Visual Storyteller</span>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/75">
            I create scroll-stopping videos that blend storytelling, motion design and high-retention
            editing. From high-energy gaming content to cinematic geopolitical documentaries and viral
            YouTube Shorts — I turn ideas into visuals that capture attention.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-12 flex flex-wrap gap-4">
            <Magnetic>
              <a href="#work" className="pill-btn-solid group hover:shadow-[0_20px_40px_-20px_var(--forest)]">
                <Play className="h-4 w-4" /> Watch my work
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="pill-btn hover:bg-primary hover:text-primary-foreground">
                Let's work together <ArrowRight className="h-4 w-4" />
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-20 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground/60">
            <span className="uppercase tracking-widest text-xs">Currently focused on</span>
            {["Gaming", "Documentary", "Short-form", "Motion GFX"].map((t) => (
              <span key={t} className="font-display italic text-primary">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </motion.div>

      {/* scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-primary/50"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = [
    "Storytelling",
    "Motion Design",
    "Color Grading",
    "Sound Design",
    "Velocity Edits",
    "Typography",
    "Retention Editing",
    "AI Workflows",
  ];
  return (
    <div className="relative border-y border-border/60 py-6 overflow-hidden bg-cream-deep/40">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="mx-8 font-display italic text-3xl md:text-4xl text-primary/70">
            {it} <span className="text-accent mx-2">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const tools = [
    { name: "Alight Motion", letter: "A" },
    { name: "CapCut", letter: "C" },
    { name: "Picsart", letter: "P" },
    { name: "Canva", letter: "C" },
    { name: "Adobe Express", letter: "Ae" },
  ];
  const skills = [
    "Video Editing", "Motion Graphics", "Storytelling", "YouTube Editing", "Gaming Content",
    "Documentary Editing", "Color Grading", "Sound Design", "VFX", "Short-form Content",
    "Content Strategy", "AI Workflow", "Transitions", "Typography Animation",
  ];
  const doList = [
    { icon: Film, label: "YouTube Editing" },
    { icon: Zap, label: "Gaming Videos" },
    { icon: Sparkles, label: "Documentary" },
    { icon: Play, label: "Shorts & Reels" },
    { icon: Wand2, label: "Motion Graphics" },
    { icon: Type, label: "Text Animation" },
    { icon: Palette, label: "Color Grading" },
    { icon: Music, label: "Sound Design" },
  ];

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-primary/70 mb-6">
              <span className="mr-3">01</span> About
            </div>
            <h2 className="font-display text-6xl md:text-7xl text-primary leading-[0.95]">
              About <em className="italic text-accent">me</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 paper-card p-6">
              <div className="text-xs uppercase tracking-widest text-primary/70 mb-4">Tools I use</div>
              <div className="flex flex-wrap gap-3">
                {tools.map((t) => (
                  <div
                    key={t.name}
                    className="flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm hover:-translate-y-0.5 transition-transform"
                  >
                    <span className="grid place-items-center h-8 w-8 rounded-lg bg-primary text-primary-foreground font-display text-sm">
                      {t.letter}
                    </span>
                    {t.name}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/80">
          <Reveal delay={0.1}>
            <p>
              Hi, I'm <span className="font-display italic text-primary">Ayush Singh</span> — a self-taught
              video editor and creative storyteller from India.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              My journey started with editing gaming videos, where I learned how to keep viewers engaged
              through fast pacing, smooth transitions and impactful visual effects. Over time, I expanded
              into documentary-style and geopolitical content — developing a more cinematic style focused
              on storytelling, emotion and retention.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              I enjoy transforming raw footage into polished, high-quality content that not only looks
              professional but delivers a memorable viewing experience. Every project is a chance to
              experiment with new techniques — motion graphics, sound design, color grading and AI-powered
              workflows.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="pt-6">
              <div className="text-xs uppercase tracking-widest text-primary/70 mb-4">What I do</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {doList.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="paper-card p-4 flex flex-col gap-2 hover:-translate-y-1 transition-transform"
                  >
                    <Icon className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="pt-6">
              <div className="text-xs uppercase tracking-widest text-primary/70 mb-4">Skills</div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-primary/30 px-3 py-1 text-sm text-primary/90 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ACHIEVEMENTS ---------------- */
function Achievements() {
  const stats = [
    { label: "Total Views", value: 12_500_000, suffix: "+", platform: "YouTube" },
    { label: "Followers", value: 148_000, suffix: "+", platform: "Across platforms" },
    { label: "Watch Time", value: 320_000, suffix: " hrs", platform: "Lifetime" },
    { label: "Videos Edited", value: 640, suffix: "+", platform: "2020 — Present" },
  ];
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.25em] text-primary/70 mb-6">
            <span className="mr-3">02</span> Achievements
          </div>
          <h2 className="font-display text-6xl md:text-7xl text-primary leading-[0.95] mb-16">
            By the <em className="italic text-accent">numbers</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="paper-card p-6 md:p-8 h-full flex flex-col justify-between min-h-[200px] hover:-translate-y-1 transition-transform">
                <div className="text-xs uppercase tracking-widest text-primary/60">{s.platform}</div>
                <div className="mt-6">
                  <div className="font-display text-5xl md:text-6xl text-primary tracking-tight">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-foreground/70">{s.label}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WORK ---------------- */
type Video = { id: string; title: string; kind: "shorts" | "longform" };
type CategoryKey = "gaming-shorts" | "geo-shorts" | "gaming-long" | "geo-long";

const VIDEOS: Record<CategoryKey, Video[]> = {
  "gaming-shorts": [
    { id: "dQw4w9WgXcQ", title: "Insane Clutch Play", kind: "shorts" },
    { id: "6_b7RDuLwcI", title: "Sniper Highlights", kind: "shorts" },
    { id: "L_jWHffIx5E", title: "Best Kill Compilation", kind: "shorts" },
    { id: "hY7m5jjJ9mM", title: "1v4 Ranked Clutch", kind: "shorts" },
    { id: "kJQP7kiw5Fk", title: "Boss Fight Edit", kind: "shorts" },
    { id: "9bZkp7q19f0", title: "Velocity Montage", kind: "shorts" },
  ],
  "geo-shorts": [
    { id: "3JZ_D3ELwOQ", title: "India–Pacific Explained", kind: "shorts" },
    { id: "M7lc1UVf-VE", title: "Rise of BRICS", kind: "shorts" },
    { id: "aqz-KE-bpKQ", title: "Middle East Timeline", kind: "shorts" },
    { id: "e-ORhEE9VVg", title: "Nuclear Diplomacy 60s", kind: "shorts" },
  ],
  "gaming-long": [
    { id: "ScMzIvxBSi4", title: "Ultimate Ranked Grind — Full Doc", kind: "longform" },
    { id: "ktvTqknDobU", title: "Story of a Streamer", kind: "longform" },
    { id: "7wtfhZwyrcc", title: "How This Team Dominated", kind: "longform" },
  ],
  "geo-long": [
    { id: "Zi_XLOBDo_Y", title: "Cold War 2.0 — 20 min Documentary", kind: "longform" },
    { id: "jNQXAC9IVRw", title: "The New Silk Road", kind: "longform" },
    { id: "V-_O7nl0Ii0", title: "Ocean of Power", kind: "longform" },
  ],
};

const CATEGORIES: { key: CategoryKey; label: string }[] = [
  { key: "gaming-shorts", label: "Gaming Shorts" },
  { key: "geo-shorts", label: "Geopolitics Shorts" },
  { key: "gaming-long", label: "Gaming Long-form" },
  { key: "geo-long", label: "Geopolitics Long-form" },
];

function VideoCard({ v }: { v: Video }) {
  const [play, setPlay] = useState(false);
  const isShort = v.kind === "shorts";
  const thumb = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={
        "group relative paper-card overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_var(--forest)] transition-all " +
        (isShort ? "aspect-[9/16]" : "aspect-video")
      }
      onClick={() => setPlay(true)}
    >
      {play ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`}
          title={v.title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <img
            src={thumb}
            alt={v.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
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
            <div className="font-display text-lg mt-1 line-clamp-2">{v.title}</div>
          </div>
        </>
      )}
    </motion.div>
  );
}

function Work() {
  const [cat, setCat] = useState<CategoryKey>("gaming-shorts");
  const [visible, setVisible] = useState(6);
  const list = VIDEOS[cat];
  const shown = list.slice(0, visible);

  return (
    <section id="work" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.25em] text-primary/70 mb-6">
            <span className="mr-3">03</span> Selected Work
          </div>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <h2 className="font-display text-6xl md:text-7xl text-primary leading-[0.95]">
              Recent <em className="italic text-accent">edits</em>
            </h2>
            <p className="max-w-md text-foreground/70">
              A curated selection across gaming and geopolitics — click any card to play. Thumbnails
              lazy-load, iframes only mount on interaction.
            </p>
          </div>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.05}>
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((c) => {
              const active = c.key === cat;
              return (
                <button
                  key={c.key}
                  onClick={() => {
                    setCat(c.key);
                    setVisible(6);
                  }}
                  className={
                    "relative rounded-full border px-5 py-2.5 text-sm transition-all " +
                    (active
                      ? "bg-primary text-primary-foreground border-primary shadow-soft"
                      : "border-primary/30 text-primary hover:bg-primary/5")
                  }
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid — masonry-ish via CSS columns for shorts, grid for long-form */}
        <motion.div
          key={cat}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={
            cat.includes("shorts")
              ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
              : "grid grid-cols-1 md:grid-cols-2 gap-6"
          }
        >
          {shown.map((v) => (
            <VideoCard key={v.id} v={v} />
          ))}
        </motion.div>

        {visible < list.length && (
          <div className="mt-12 flex justify-center">
            <Magnetic>
              <button
                onClick={() => setVisible((n) => n + 6)}
                className="pill-btn hover:bg-primary hover:text-primary-foreground"
              >
                Load more <ArrowRight className="h-4 w-4" />
              </button>
            </Magnetic>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------- TIMELINE ---------------- */
function Timeline() {
  const items = [
    {
      year: "2020",
      title: "Started editing",
      body: "Picked up Alight Motion and CapCut to edit gaming clips for friends and small creators.",
    },
    {
      year: "2021",
      title: "First 1M views",
      body: "A short-form gaming edit crossed a million views and pushed me to take editing seriously.",
    },
    {
      year: "2022",
      title: "Shift to documentary",
      body: "Began editing geopolitical explainers — cinematic pacing, sound design and typography.",
    },
    {
      year: "2023",
      title: "Full-time editor",
      body: "Went full-time as an editor for multiple creators across YouTube and Instagram.",
    },
    {
      year: "2024",
      title: "AI workflows",
      body: "Integrated AI-assisted color, transcription and motion into a faster, cleaner pipeline.",
    },
    {
      year: "2025",
      title: "Portfolio launch",
      body: "Launched this portfolio to work with brands and creators building premium content.",
    },
  ];

  return (
    <section id="journey" className="relative py-32 px-6 bg-cream-deep/30">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.25em] text-primary/70 mb-6">
            <span className="mr-3">04</span> Journey
          </div>
          <h2 className="font-display text-6xl md:text-7xl text-primary leading-[0.95] mb-16">
            The <em className="italic text-accent">timeline</em>
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/25 md:-translate-x-1/2" />
          <div className="space-y-14">
            {items.map((it, i) => (
              <Reveal key={it.year} delay={i * 0.05}>
                <div
                  className={
                    "relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-12 " +
                    (i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2")
                  }
                >
                  <span className="absolute left-4 md:left-1/2 top-2 h-3 w-3 rounded-full bg-accent -translate-x-1/2 ring-4 ring-cream" />
                  <div className={i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}>
                    <div className="font-display text-4xl text-primary italic">{it.year}</div>
                    <h3 className="font-display text-2xl mt-1">{it.title}</h3>
                    <p className="mt-3 text-foreground/75 leading-relaxed">{it.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [sending, setSending] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // TODO: wire to Resend via a server function once the Resend connector is linked.
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    (e.target as HTMLFormElement).reset();
    toast.success("Message sent — I'll get back to you soon.");
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl paper-card p-8 md:p-14 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative grid md:grid-cols-2 gap-12">
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-primary/70 mb-6">
                <span className="mr-3">05</span> Contact
              </div>
              <h2 className="font-display text-5xl md:text-6xl text-primary leading-[0.95]">
                Let's <em className="italic text-accent">work</em>
                <br /> together
              </h2>
              <p className="mt-6 text-foreground/75 max-w-md">
                Have a project, a channel, or an idea you want brought to life? Drop a note — I read
                every message.
              </p>

              <div className="mt-10 space-y-3 text-sm">
                <a
                  href="mailto:hello@ayush.dev"
                  className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" /> hello@ayush.dev
                </a>
              </div>

              <div className="mt-8 flex gap-3">
                {[
                  { icon: Youtube, href: "#", label: "YouTube" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: MessageCircle, href: "#", label: "Discord" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="grid place-items-center h-11 w-11 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-0.5"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="text-xs uppercase tracking-widest text-primary/70">Name</label>
                <input
                  required
                  name="name"
                  maxLength={100}
                  className="mt-2 w-full bg-transparent border-0 border-b border-primary/25 focus:border-primary outline-none py-2 text-lg font-display"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-primary/70">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  maxLength={255}
                  className="mt-2 w-full bg-transparent border-0 border-b border-primary/25 focus:border-primary outline-none py-2 text-lg font-display"
                  placeholder="you@studio.com"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-primary/70">Message</label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  maxLength={1000}
                  className="mt-2 w-full bg-transparent border-0 border-b border-primary/25 focus:border-primary outline-none py-2 text-base resize-none"
                  placeholder="Tell me about your project…"
                />
              </div>
              <Magnetic>
                <button
                  disabled={sending}
                  className="pill-btn-solid disabled:opacity-60"
                  type="submit"
                >
                  {sending ? "Sending…" : "Send message"} <Send className="h-4 w-4" />
                </button>
              </Magnetic>
            </form>
          </Reveal>
        </div>
      </div>

      <footer className="mx-auto max-w-5xl px-4 mt-16 flex flex-wrap items-center justify-between gap-4 text-sm text-foreground/60">
        <div className="font-display italic text-primary">Ayush Singh — 2025</div>
        <div>Crafted with care · Editorial edition</div>
      </footer>
    </section>
  );
}

/* ---------------- ROOT ---------------- */
function Portfolio() {
  return (
    <main className="relative">
      <Toaster />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Achievements />
      <Work />
      <Timeline />
      <Contact />
    </main>
  );
}
