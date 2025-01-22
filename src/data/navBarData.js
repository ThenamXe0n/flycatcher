import Path from "../routepath/Path";

export const navItemData = [
  {
    title: "Home",
    url: Path.HOME,
    submenu: [
      {
        title: "Electronics",
        poster: "assets/img/menu/menu-home-1.jpg",
        url: "/home/electronic",
      },
      {
        title: "Fashion",
        poster: "assets/img/menu/menu-home-2.jpg",
        url: "/home/fashion",
      },
      {
        title: "beauty",
        poster: "assets/img/menu/menu-home-3.jpg",
        url: "/home/beauty",
      },
      {
        title: "jewlary",
        poster: "assets/img/menu/menu-home-4.jpg",
        url: "/home/electronic",
      },
      {
        title: "grocery",
        poster: "assets/img/menu/menu-home-5.jpg",
        url: "/home/electronic",
      },
    ],
  },
  {
    title: "Shop",
    url: Path.SHOP,
  },
  {
    title: "my Order",
    url: Path.ORDER,
  },
  {
    title: "Blog",
    url: Path.BLOG,
  },
  {
    title: "contact",
    url: Path.CONTACT,
  },
];
