export type VideoCategory =
  | "gaming-shorts"
  | "gaming-long-form"
  | "geopolitics-shorts"
  | "geopolitics-long-form";

export type VideoEntry = {
  title: string;
  youtubeId: string;
  category: VideoCategory;
  description: string;
  featured: boolean;
  thumbnailOverride: string | null;
};

export type SocialLink = {
  label: string;
  url: string;
};

export type ContactMethod = {
  label: string;
  value: string;
  href?: string;
};

export type PersonalInfo = {
  fullName: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string | null;
  location: string;
  socialLinks: SocialLink[];
  profilePhoto: string | null;
  tools: string[];
  skills: string[];
  preferredContactMethods: ContactMethod[];
  availabilityStatus: string;
};

export type AchievementStat = {
  label: string;
  value: number | null;
  suffix?: string;
  platform?: string;
  description?: string;
};

export type AchievementGroup = {
  title: string;
  stats: AchievementStat[];
};

export type ExperienceTimelineItem = {
  year: string;
  title: string;
  description: string;
};
