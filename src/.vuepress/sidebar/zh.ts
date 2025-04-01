import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "Code",
      icon: "code",
      link: "/posts/tech/intro.md",
    },
    {
      text: "生活记录",
      icon: "camera",
      link: "/posts/life/intro.md",
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
  
  // 为科技页面单独配置侧边栏
  "/posts/tech/": [
    {
      text: "科技",
      icon: "code",
      children: [
        "intro.md",
        {
          text: "Web开发",
          icon: "globe",
          prefix: "web/",
          collapsible: true,
          children: [
            // "frontend.md",
            // "backend.md",
          ],
        },
        {
          text: "移动应用",
          icon: "mobile",
          prefix: "mobile/",
          collapsible: true,
          children: [
            // "android.md",
            // "ios.md",
          ],
        },
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
