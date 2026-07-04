import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useMotionValue, c as AnimatePresence, i as useTransform, n as animate, o as useScroll, r as useSpring, s as motion, t as useInView } from "../_libs/framer-motion.mjs";
import { a as Play, c as Music, d as Film, f as ArrowUpRight, i as Sparkles, l as MessageCircle, n as WandSparkles, o as Phone, p as ArrowRight, r as Type, s as Palette, t as Zap, u as Mail } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BPg7mmUJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("animate-pulse rounded-md bg-primary/10", className),
		...props
	});
}
function VideoCard({ videoId, title, kind, thumbnailOverride = null, className }) {
	const cardRef = (0, import_react.useRef)(null);
	const [play, setPlay] = (0, import_react.useState)(false);
	const [shouldLoadThumbnail, setShouldLoadThumbnail] = (0, import_react.useState)(false);
	const [imageLoaded, setImageLoaded] = (0, import_react.useState)(false);
	const isShort = kind === "shorts";
	const fallbackThumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
	const preferredThumbnailUrl = thumbnailOverride ?? `https://i.ytimg.com/vi_webp/${videoId}/hqdefault.webp`;
	const [thumbnailUrl, setThumbnailUrl] = (0, import_react.useState)(preferredThumbnailUrl);
	(0, import_react.useEffect)(() => {
		setPlay(false);
		setShouldLoadThumbnail(false);
		setImageLoaded(false);
		setThumbnailUrl(preferredThumbnailUrl);
	}, [preferredThumbnailUrl, videoId]);
	(0, import_react.useEffect)(() => {
		if (shouldLoadThumbnail || typeof window === "undefined") return;
		if (!("IntersectionObserver" in window)) {
			setShouldLoadThumbnail(true);
			return;
		}
		const card = cardRef.current;
		if (!card) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (!entry?.isIntersecting) return;
			setShouldLoadThumbnail(true);
			observer.disconnect();
		}, {
			rootMargin: "300px 0px",
			threshold: .01
		});
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
	const onKeyDown = (event) => {
		if (play || event.key !== "Enter" && event.key !== " ") return;
		event.preventDefault();
		startPlayback();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref: cardRef,
		layout: true,
		initial: {
			opacity: 0,
			y: 20
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			y: 16,
			scale: .97
		},
		whileHover: play ? void 0 : { scale: 1.018 },
		transition: {
			duration: .5,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		role: play ? void 0 : "button",
		"data-video-card": true,
		tabIndex: play ? void 0 : 0,
		"aria-label": play ? void 0 : `Play ${title}`,
		onClick: play ? void 0 : startPlayback,
		onKeyDown,
		className: cn("group relative paper-card overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_var(--forest)] transition-all", isShort ? "aspect-[9/16]" : "aspect-video", play && "cursor-default", className),
		children: play ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
			className: "absolute inset-0 h-full w-full",
			src: `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1`,
			title,
			allow: "autoplay; encrypted-media; picture-in-picture",
			sandbox: "allow-scripts allow-same-origin allow-presentation",
			allowFullScreen: true
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			(!shouldLoadThumbnail || !imageLoaded) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "absolute inset-0 h-full w-full rounded-none bg-primary/15" }),
			shouldLoadThumbnail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: thumbnailUrl,
				alt: title,
				loading: "lazy",
				decoding: "async",
				onLoad: () => setImageLoaded(true),
				onError: handleImageError,
				className: cn("absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105", imageLoaded ? "opacity-100" : "opacity-0")
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/10 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 grid place-items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					whileHover: { scale: 1.1 },
					className: "grid place-items-center h-16 w-16 rounded-full bg-cream/90 backdrop-blur border border-cream shadow-soft",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-6 w-6 text-primary fill-primary translate-x-0.5" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-0 left-0 right-0 p-4 text-cream",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-widest opacity-70",
					children: isShort ? "Shorts" : "Long-form"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-lg mt-1 line-clamp-2",
					children: title
				})]
			})
		] })
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var videos = [
	{
		title: "Geopolitics Long-form Edit 1",
		youtubeId: "x8KCWCAbEH0",
		category: "geopolitics-long-form",
		description: "Long-form geopolitical storytelling edit with documentary pacing, cinematic visuals, motion graphics, and sound design.",
		featured: false,
		thumbnailOverride: null
	},
	{
		title: "Geopolitics Long-form Edit 2",
		youtubeId: "uWhCw2eUVnU",
		category: "geopolitics-long-form",
		description: "Long-form geopolitical explainer edit focused on retention, smooth transitions, and clear visual sequencing.",
		featured: false,
		thumbnailOverride: null
	},
	{
		title: "Geopolitics Short 1",
		youtubeId: "yu2xbU34piw",
		category: "geopolitics-shorts",
		description: "Short-form geopolitical edit using concise storytelling, punchy pacing, and platform-ready motion graphics.",
		featured: false,
		thumbnailOverride: null
	},
	{
		title: "Geopolitics Short 2",
		youtubeId: "Zg1peAaUjt8",
		category: "geopolitics-shorts",
		description: "Fast geopolitical short edited for audience retention with animated emphasis and clean transitions.",
		featured: false,
		thumbnailOverride: null
	},
	{
		title: "Gaming Long-form Edit",
		youtubeId: "rSJRPnAN7z4",
		category: "gaming-long-form",
		description: "Long-form gaming edit with energetic pacing, gameplay storytelling, transitions, and sound-led moments.",
		featured: false,
		thumbnailOverride: null
	},
	{
		title: "Gaming Short 1",
		youtubeId: "4VTRRHFR0OA",
		category: "gaming-shorts",
		description: "High-energy gaming short edited with fast cuts, velocity moments, transitions, and sound effects.",
		featured: false,
		thumbnailOverride: null
	},
	{
		title: "Gaming Short 2",
		youtubeId: "nlDqAZZ9ZTk",
		category: "gaming-shorts",
		description: "Short-form gaming highlight edit focused on punchy pacing, viewer retention, and smooth visual flow.",
		featured: false,
		thumbnailOverride: null
	},
	{
		title: "Gaming Short 3",
		youtubeId: "RXsHFXw9f-I",
		category: "gaming-shorts",
		description: "Gaming clip edit with motion accents, timing-driven cuts, and platform-friendly short-form structure.",
		featured: false,
		thumbnailOverride: null
	},
	{
		title: "Gaming Short 4",
		youtubeId: "G1DNdb2ygvw",
		category: "gaming-shorts",
		description: "Gaming short edited for quick impact using transitions, sound design, and high-retention pacing.",
		featured: false,
		thumbnailOverride: null
	}
];
function Reveal({ children, delay = 0, y = 24, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-80px"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		initial: {
			opacity: 0,
			y
		},
		animate: inView ? {
			opacity: 1,
			y: 0
		} : {},
		transition: {
			duration: .9,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className,
		children
	});
}
function Magnetic({ children, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const sx = useSpring(x, {
		stiffness: 200,
		damping: 15
	});
	const sy = useSpring(y, {
		stiffness: 200,
		damping: 15
	});
	const onMove = (e) => {
		const rect = ref.current?.getBoundingClientRect();
		if (!rect) return;
		x.set((e.clientX - (rect.left + rect.width / 2)) * .25);
		y.set((e.clientY - (rect.top + rect.height / 2)) * .25);
	};
	const onLeave = () => {
		x.set(0);
		y.set(0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		style: {
			x: sx,
			y: sy
		},
		whileHover: { scale: 1.035 },
		whileTap: { scale: .98 },
		className: "inline-block " + className,
		children
	});
}
function CountUp({ to, suffix = "", duration = 2.2 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-80px"
	});
	const [val, setVal] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const controls = animate(0, to, {
			duration,
			ease: [
				.22,
				1,
				.36,
				1
			],
			onUpdate: (v) => setVal(v)
		});
		return () => controls.stop();
	}, [
		inView,
		to,
		duration
	]);
	const format = (n) => {
		if (to >= 1e6) return (n / 1e6).toFixed(1) + "M";
		if (to >= 1e3) return Math.round(n / 100) / 10 + "K";
		return Math.round(n).toString();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [format(val), suffix]
	});
}
function AnimatedSection({ children, className = "", id }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		amount: .1
	});
	const [isVisible, setIsVisible] = (0, import_react.useState)(() => typeof window !== "undefined" && !!id && window.location.hash === `#${id}`);
	(0, import_react.useEffect)(() => {
		if (inView) setIsVisible(true);
	}, [inView]);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const checkVisibility = () => {
			const el = ref.current;
			if (!el) return;
			const rect = el.getBoundingClientRect();
			const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
			const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
			const threshold = Math.max(1, Math.min(rect.height * .1, viewportHeight * .1));
			const hashTargeted = !!id && window.location.hash === `#${id}`;
			if (rect.bottom > 0 && rect.top < viewportHeight && visibleHeight >= threshold || hashTargeted) setIsVisible(true);
		};
		const observer = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) setIsVisible(true);
		}, { threshold: .1 });
		const el = ref.current;
		if (el) observer.observe(el);
		const frame = window.requestAnimationFrame(checkVisibility);
		const onHashChange = () => window.requestAnimationFrame(checkVisibility);
		window.addEventListener("hashchange", onHashChange);
		window.addEventListener("resize", checkVisibility);
		return () => {
			window.cancelAnimationFrame(frame);
			observer.disconnect();
			window.removeEventListener("hashchange", onHashChange);
			window.removeEventListener("resize", checkVisibility);
		};
	}, [id]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.section, {
		ref,
		id,
		initial: isVisible ? {
			opacity: 1,
			y: 0
		} : {
			opacity: 0,
			y: 32
		},
		animate: isVisible ? {
			opacity: 1,
			y: 0
		} : {
			opacity: 0,
			y: 32
		},
		onViewportEnter: () => setIsVisible(true),
		viewport: {
			once: true,
			amount: .1
		},
		transition: {
			duration: .75,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className,
		children
	});
}
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed top-0 left-0 right-0 z-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-5 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "font-display text-xl tracking-tight text-primary",
					children: ["Ayush", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent",
						children: "."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80",
					children: [
						["About", "#about"],
						["Work", "#work"],
						["Journey", "#journey"],
						["Contact", "#contact"]
					].map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: h,
						className: "relative hover:text-primary transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300",
						children: l
					}, l))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "mailto:ayushkumar180404@gmail.com",
					className: "pill-btn text-sm hover:bg-primary hover:text-primary-foreground",
					children: ["Hire me ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
				}) })
			]
		})
	});
}
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
	const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
	const opacity = useTransform(scrollYProgress, [0, .8], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
		ref,
		id: "top",
		initial: {
			opacity: 0,
			y: 18
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .8,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "relative min-h-screen pt-36 pb-24 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { y: y1 },
				className: "pointer-events-none absolute -top-20 -left-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-float"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { y: y2 },
				className: "pointer-events-none absolute top-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl animate-float"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 opacity-30 mix-blend-multiply animate-grain [background-image:url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22200%22%20height=%22200%22><filter%20id=%22n%22><feTurbulence%20baseFrequency=%220.85%22%20numOctaves=%222%22/></filter><rect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23n)%22%20opacity=%220.35%22/></svg>')]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: { opacity },
				className: "relative mx-auto max-w-6xl px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-[clamp(3rem,10vw,9rem)] leading-[0.95] text-primary",
							children: ["Ayush ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "font-normal italic text-accent",
								children: "Singh"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-display text-2xl md:text-3xl text-foreground/80 italic",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Video Editor" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: "•"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Motion Designer" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: "•"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Visual Storyteller" })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .25,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 mx-auto max-w-2xl text-lg leading-relaxed text-foreground/75",
							children: "I create scroll-stopping videos that blend storytelling, motion design and high-retention editing. From high-energy gaming content to cinematic geopolitical documentaries and viral YouTube Shorts — I turn ideas into visuals that capture attention."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .35,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 flex flex-wrap justify-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#work",
								className: "pill-btn-solid group hover:shadow-[0_20px_40px_-20px_var(--forest)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4" }), " Watch my work"]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "pill-btn hover:bg-primary hover:text-primary-foreground",
								children: ["Let's work together ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}) })]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: { y: [
					0,
					8,
					0
				] },
				transition: {
					repeat: Infinity,
					duration: 2
				},
				className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-primary/50",
				children: "Scroll ↓"
			})
		]
	});
}
function Marquee() {
	const items = [
		"Storytelling",
		"Motion Design",
		"Color Grading",
		"Sound Design",
		"Velocity Edits",
		"Typography",
		"Retention Editing",
		"AI Workflows"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 16
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			amount: .6
		},
		transition: {
			duration: .65,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "relative border-y border-border/60 py-6 overflow-hidden bg-cream-deep/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex whitespace-nowrap animate-marquee",
			children: [
				...items,
				...items,
				...items
			].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "mx-8 font-display italic text-3xl md:text-4xl text-primary/70",
				children: [
					it,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent mx-2",
						children: "✦"
					})
				]
			}, i))
		})
	});
}
function About() {
	const tools = [
		{
			name: "Alight Motion",
			letter: "A"
		},
		{
			name: "CapCut",
			letter: "C"
		},
		{
			name: "Picsart",
			letter: "P"
		},
		{
			name: "Canva",
			letter: "C"
		},
		{
			name: "Adobe Express",
			letter: "Ae"
		}
	];
	const doList = [
		{
			icon: Film,
			label: "YouTube Editing"
		},
		{
			icon: Zap,
			label: "Gaming Videos"
		},
		{
			icon: Sparkles,
			label: "Documentary"
		},
		{
			icon: Play,
			label: "Shorts & Reels"
		},
		{
			icon: WandSparkles,
			label: "Motion Graphics"
		},
		{
			icon: Type,
			label: "Text Animation"
		},
		{
			icon: Palette,
			label: "Color Grading"
		},
		{
			icon: Music,
			label: "Sound Design"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSection, {
		id: "about",
		className: "relative py-32 px-6 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl grid md:grid-cols-12 gap-12 text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xs uppercase tracking-[0.25em] text-primary/70 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mr-3",
						children: "01"
					}), " About"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-6xl md:text-7xl text-primary leading-[0.95]",
					children: ["About ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "italic text-accent",
						children: "me"
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 paper-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-primary/70 mb-4",
							children: "Tools I use"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-3",
							children: tools.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm hover:-translate-y-0.5 transition-transform",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid place-items-center h-8 w-8 rounded-lg bg-primary text-primary-foreground font-display text-sm",
									children: t.letter
								}), t.name]
							}, t.name))
						})]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/80",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Hi, I'm ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display italic text-primary",
								children: "Ayush Singh"
							}),
							" — a self-taught video editor and creative storyteller from India."
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "My journey started with editing gaming videos, where I learned how to keep viewers engaged through fast pacing, smooth transitions and impactful visual effects. Over time, I expanded into documentary-style and geopolitical content — developing a more cinematic style focused on storytelling, emotion and retention." })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I enjoy transforming raw footage into polished, high-quality content that not only looks professional but delivers a memorable viewing experience. Every project is a chance to experiment with new techniques — motion graphics, sound design, color grading and AI-powered workflows." })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .25,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-widest text-primary/70 mb-4",
								children: "What I do"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
								children: doList.map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "paper-card p-4 flex flex-col gap-2 hover:-translate-y-1 transition-transform",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium",
										children: label
									})]
								}, label))
							})]
						})
					})
				]
			})]
		})
	});
}
function Achievements() {
	const stats = [{
		label: "Average Views / Video",
		value: 5e3,
		prefix: "2-",
		suffix: "K",
		platform: "YouTube"
	}, {
		label: "Videos Edited",
		value: 200,
		suffix: "+",
		platform: "2023 — Present"
	}];
	const categories = [
		{
			icon: Film,
			label: "YouTube Shorts"
		},
		{
			icon: Film,
			label: "YouTube Long-form"
		},
		{
			icon: Zap,
			label: "Gaming Highlights"
		},
		{
			icon: Sparkles,
			label: "Geopolitics Analysis"
		},
		{
			icon: WandSparkles,
			label: "Motion Graphics"
		},
		{
			icon: Palette,
			label: "Color Grading"
		},
		{
			icon: Music,
			label: "Sound Design"
		},
		{
			icon: Type,
			label: "Motion Typography"
		},
		{
			icon: Zap,
			label: "Velocity Edits"
		},
		{
			icon: Sparkles,
			label: "Visual Effects"
		},
		{
			icon: Film,
			label: "Instagram Reels"
		},
		{
			icon: WandSparkles,
			label: "Thumbnail Design"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSection, {
		className: "relative py-32 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xs uppercase tracking-[0.25em] text-primary/70 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mr-3",
						children: "02"
					}), " Achievements"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-6xl md:text-7xl text-primary leading-[0.95] mb-16",
					children: ["By the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "italic text-accent",
						children: "numbers"
					})]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto mb-12",
					children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "paper-card p-6 md:p-8 h-full flex flex-col justify-between min-h-[200px] hover:-translate-y-1 transition-transform",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-widest text-primary/60",
								children: s.platform
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-display text-5xl md:text-6xl text-primary tracking-tight",
									children: [s.prefix, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
										to: s.value,
										suffix: s.suffix
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-sm text-foreground/70",
									children: s.label
								})]
							})]
						})
					}, s.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .2,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-primary/60 mb-6",
						children: "What I specialize in"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap justify-center gap-3 max-w-3xl mx-auto",
						children: categories.map(({ icon: Icon, label }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								scale: .9
							},
							whileInView: {
								opacity: 1,
								scale: 1
							},
							viewport: { once: true },
							transition: {
								delay: i * .04,
								duration: .4,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "paper-card px-4 py-2.5 flex items-center gap-2 text-sm font-medium hover:-translate-y-0.5 hover:shadow-soft transition-all cursor-default",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-accent" }), label]
						}, label))
					})]
				})
			]
		})
	});
}
var CATEGORIES = [
	{
		key: "gaming-shorts",
		label: "Gaming Shorts"
	},
	{
		key: "geopolitics-shorts",
		label: "Geopolitics Shorts"
	},
	{
		key: "gaming-long-form",
		label: "Gaming Long-form"
	},
	{
		key: "geopolitics-long-form",
		label: "Geopolitics Long-form"
	},
	{
		key: "all",
		label: "All"
	}
];
var VIDEO_BATCH_SIZE = 9;
function Work() {
	const [cat, setCat] = (0, import_react.useState)("all");
	const [visibleCount, setVisibleCount] = (0, import_react.useState)(VIDEO_BATCH_SIZE);
	const filteredVideos = (0, import_react.useMemo)(() => cat === "all" ? videos : videos.filter((video) => video.category === cat), [cat]);
	const shown = filteredVideos.slice(0, visibleCount);
	const hasMoreVideos = visibleCount < filteredVideos.length;
	(0, import_react.useEffect)(() => {}, [cat, filteredVideos.length]);
	const getVideoKind = (video) => video.category.includes("shorts") ? "shorts" : "longform";
	const selectCategory = (category) => {
		setCat(category);
		setVisibleCount(VIDEO_BATCH_SIZE);
	};
	const showMoreVideos = () => {
		setVisibleCount((count) => Math.min(count + VIDEO_BATCH_SIZE, filteredVideos.length));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSection, {
		id: "work",
		className: "relative py-32 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs uppercase tracking-[0.25em] text-primary/70 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mr-3",
							children: "03"
						}), " Selected Work"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-6xl md:text-7xl text-primary leading-[0.95] mb-4",
						children: ["Recent ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-accent",
							children: "edits"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto max-w-md text-foreground/70 mb-12",
						children: "A curated selection across gaming and geopolitics — click any card to play."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2 mb-10",
						children: CATEGORIES.map((c) => {
							const active = c.key === cat;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => selectCategory(c.key),
								"aria-pressed": active,
								className: "relative rounded-full border px-5 py-2.5 text-sm transition-all " + (active ? "bg-primary text-primary-foreground border-primary shadow-soft" : "border-primary/30 text-primary hover:bg-primary/5"),
								children: c.label
							}, c.key);
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					layout: true,
					"data-work-grid": true,
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						initial: false,
						children: shown.map((video) => {
							const kind = getVideoKind(video);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoCard, {
								videoId: video.youtubeId,
								title: video.title,
								kind,
								thumbnailOverride: video.thumbnailOverride,
								className: kind === "longform" ? "sm:col-span-2" : ""
							}, video.youtubeId);
						})
					})
				}),
				hasMoreVideos && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: showMoreVideos,
						className: "pill-btn hover:bg-primary hover:text-primary-foreground",
						children: ["Load more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					}) })
				})
			]
		})
	});
}
function Timeline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSection, {
		id: "journey",
		className: "relative py-32 px-6 bg-cream-deep/30",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-xs uppercase tracking-[0.25em] text-primary/70 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mr-3",
					children: "04"
				}), " Journey"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "font-display text-6xl md:text-7xl text-primary leading-[0.95] mb-16",
				children: ["The ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
					className: "italic text-accent",
					children: "timeline"
				})]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/25 md:-translate-x-1/2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-14",
					children: [
						{
							year: "2020",
							title: "Started editing",
							body: "Picked up Alight Motion and CapCut to edit gaming clips for friends and small creators."
						},
						{
							year: "2021",
							title: "First 1M views",
							body: "A short-form gaming edit crossed a million views and pushed me to take editing seriously."
						},
						{
							year: "2022",
							title: "Shift to documentary",
							body: "Began editing geopolitical explainers — cinematic pacing, sound design and typography."
						},
						{
							year: "2023",
							title: "Full-time editor",
							body: "Went full-time as an editor for multiple creators across YouTube and Instagram."
						},
						{
							year: "2024",
							title: "AI workflows",
							body: "Integrated AI-assisted color, transcription and motion into a faster, cleaner pipeline."
						},
						{
							year: "2025",
							title: "Portfolio launch",
							body: "Launched this portfolio to work with brands and creators building premium content."
						}
					].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-12 " + (i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-4 md:left-1/2 top-2 h-3 w-3 rounded-full bg-accent -translate-x-1/2 ring-4 ring-cream" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-4xl text-primary italic",
										children: it.year
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl mt-1",
										children: it.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-foreground/75 leading-relaxed",
										children: it.body
									})
								]
							})]
						})
					}, it.year))
				})]
			})]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSection, {
		id: "contact",
		className: "relative py-32 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl paper-card p-8 md:p-14 relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs uppercase tracking-[0.25em] text-primary/70 mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mr-3",
									children: "05"
								}), " Contact"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-5xl md:text-6xl text-primary leading-[0.95]",
								children: [
									"Let's ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "italic text-accent",
										children: "work"
									}),
									" together"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 mx-auto max-w-md text-foreground/75",
								children: "Have a project, a channel, or an idea you want brought to life? Reach out — I'm always open to creative collaborations."
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto",
								children: [
									{
										icon: Mail,
										label: "Email",
										value: "ayushkumar180404@gmail.com",
										href: "mailto:ayushkumar180404@gmail.com"
									},
									{
										icon: MessageCircle,
										label: "Discord",
										value: "Join on Discord",
										href: "https://discord.com/channels/781082752589496320"
									},
									{
										icon: Phone,
										label: "Phone",
										value: "+91 8252043282",
										href: "tel:+918252043282"
									}
								].map(({ icon: Icon, label, value, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href,
									target: label === "Discord" ? "_blank" : void 0,
									rel: label === "Discord" ? "noopener noreferrer" : void 0,
									className: "group paper-card p-6 flex flex-col items-center gap-3 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_var(--forest)] transition-all duration-300",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid place-items-center h-12 w-12 rounded-full bg-primary text-primary-foreground group-hover:bg-accent transition-colors duration-300",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs uppercase tracking-widest text-primary/60",
											children: label
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-sm text-primary break-all",
											children: value
										})
									]
								}, label))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "mailto:ayushkumar180404@gmail.com",
									className: "pill-btn-solid hover:shadow-[0_20px_40px_-20px_var(--forest)] inline-flex",
									children: ["Hire me ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
								}) })
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "mt-16 pt-8 border-t border-border/40 text-center text-sm text-foreground/50",
					children: "© 2026 Ayush Singh. All rights reserved."
				})
			]
		})
	});
}
function Portfolio() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Achievements, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		]
	});
}
//#endregion
export { Portfolio as component };
