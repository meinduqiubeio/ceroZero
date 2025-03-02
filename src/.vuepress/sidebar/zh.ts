import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "技术分享",
      icon: "code",
      prefix: "posts/tech/",
      children: [
        // "web-dev/",
        // "mobile-app/",
        // "mini-program/",
        // "tools/",
      ],
    },
    {
      text: "生活记录",
      icon: "camera",
      prefix: "posts/life/",
      children: [
        // "spain/",
        // "food/",
        // "travel/",
        // "culture/",
      ],
    },
    {
      text: "服务项目",
      icon: "briefcase",
      prefix: "services/",
      children: [
        // "web-dev/",
        "e-menu/emenu.md",
        "translation/translation.md",
        // "real-estate/",
      ],
    },
  ],
});
