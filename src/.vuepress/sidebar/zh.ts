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
      link: "/posts/life/intro.md",
      activeMatch: "^/posts/life/$",
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
  
  // 为生活记录页面单独配置侧边栏
  "/posts/life/": [
    {
      text: "生活记录",
      icon: "camera",
      children: [
        "intro.md",
        {
          text: "驾照相关",
          icon: "id-card",
          prefix: "drivingLicense/",
          collapsible: true,
          children: [
            "renewDriverLicense.md",
            // 其他驾照相关文件
          ],
        },
        {
          text: "材料",
          icon: "landmark",
          prefix: "documents/",
          collapsible: true,
          children: [
            "vidaLaboral.md",
          ],
        },
      ],
    },
  ],
});
