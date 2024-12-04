import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Events",
    newTab: false,
    path: "/events",
  },
  // {
  //   id: 3,
  //   title: "Blog",
  //   newTab: false,
  //   path: "/blog",
  // },
  // {
  //   id: 2.3,
  //   title: "Docs",
  //   newTab: false,
  //   path: "/docs",
  // },
  {
    id: 4,
    title: "Our Team",
    newTab: false,
    path: "/team",
  },
  {
    id: 5,
    title: "Past Teams",
    newTab: false,
    path: "/team-2023-24",
  },
  {
    id: 6,
    title: "Other RAIT ACM Chapters",
    newTab: false,
    submenu: [
      {
        id: 7,
        title: "RAIT ACM-W",
        newTab: true,
        path: "https://rait-w.acm.org",
      },
      {
        id: 8,
        title: "RAIT ACM SIG-AI",
        newTab: true,
        path: "https://rait-sigai.acm.org",
      },
    ],
  },
];

export default menuData;
