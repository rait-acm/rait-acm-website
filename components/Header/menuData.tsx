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
  {
    id: 3,
    title: "Blog",
    newTab: false,
    path: "/blog",
  },
  {
    id: 4,
    title: "Gallery",
    newTab: false,
    path: "/gallery",
  },
  {
    id: 5,
    title: "Our\u00A0Team", // Prevents "Our" and "Team" from breaking
    newTab: false,
    path: "/team",
  },
  {
    id: 6,
    title: "Past\u00A0Teams", // Prevents "Past" and "Teams" from breaking
    newTab: false,
    path: "/team-2023-24",
  },
  {
    id: 7,
    title: "Other\u00A0RAIT\u00A0ACM\u00A0Chapters", // Keeps this whole label on one line
    newTab: false,
    submenu: [
      {
        id: 8,
        title: "RAIT\u00A0ACM-W",
        newTab: true,
        path: "https://rait-w.acm.org",
      },
      {
        id: 9,
        title: "RAIT\u00A0ACM\u00A0SIG-AI",
        newTab: true,
        path: "https://rait-sigai.acm.org",
      },
    ],
  },
];

export default menuData;
