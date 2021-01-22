import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/home",
    title: "Home",
    rtlTitle: "لوحة القيادة",
    icon: "fas fa-home",
    class: ""
  },
  {
    path: "/ingestions/flatfile",
    title: "Ingest Flat File",
    rtlTitle: "الرموز",
    icon: "fas fa-file",
    class: ""
  },
  {
    path: "/ingestions/rdbms",
    title: "Ingest RDBMS",
    rtlTitle: "خرائط",
    icon: "fas fa-database",
    class: ""
  },
  {
    path: "/ingestions/streamdata",
    title: "Ingest Stream data",
    rtlTitle: "ار تي ال",
    icon: "fas fa-stream",
    class: ""
  },
  {
    path: "/notifications",
    title: "Ingest Stream Data",
    rtlTitle: "إخطارات",
    icon: "icon-bell-55",
    class: ""
  },

  {
    path: "/user",
    title: "User Profile",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/tables",
    title: "Table List",
    rtlTitle: "قائمة الجدول",
    icon: "icon-puzzle-10",
    class: ""
  },
  // {
  //   path: "/typography",
  //   title: "Typography",
  //   rtlTitle: "طباعة",
  //   icon: "icon-align-center",
  //   class: ""
  // },
  // {
  //   path: "/rtl",
  //   title: "RTL Support",
  //   rtlTitle: "ار تي ال",
  //   icon: "icon-world",
  //   class: ""
  // },

];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
