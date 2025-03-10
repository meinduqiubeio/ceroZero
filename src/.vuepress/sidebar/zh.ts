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
      collapsible: true,
      expanded: false,
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
