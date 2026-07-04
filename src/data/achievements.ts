import type { AchievementGroup } from "./types";

export const achievements: AchievementGroup[] = [
  {
    title: "Channel Stats",
    stats: [
      {
        label: "Gaming Channel Views",
        value: 25863,
        platform: "Gaming",
        description: "Total views from gaming content.",
      },
      {
        label: "Geopolitical Channel Views",
        value: 24056,
        platform: "Geopolitics",
        description: "Total views from geopolitical content.",
      },
      {
        label: "Combined Views",
        value: 49919,
        suffix: "+",
        platform: "YouTube",
        description: "Combined total from gaming and geopolitical content.",
      },
      {
        label: "Followers / Subscribers",
        value: null,
        platform: "Across platforms",
        description: "Not available yet.",
      },
    ],
  },
];
