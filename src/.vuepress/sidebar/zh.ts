import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "Code",
      icon: "code",
      prefix: "posts/tech/",
      children: [
        "intro.md",
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
         "intro.md",
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
        "web-dev/dev.md",
        "e-menu/emenu.md",
        "translation/translation.md",
        // "real-estate/",
      ],
    },
  ],
});
