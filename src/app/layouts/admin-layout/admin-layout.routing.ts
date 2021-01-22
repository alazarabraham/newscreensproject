import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { FlatfileComponent } from "src/app/pages/ingestions/flatfile/flatfile.component";
import { RdbmsComponent } from "src/app/pages/ingestions/rdbms/rdbms.component";
import { StreamdataComponent } from "src/app/pages/ingestions/streamdata/streamdata.component";
import { HomeComponent } from "src/app/pages/home/home.component";
import { ConfigurerdbmsComponent } from "src/app/pages/ingestions/rdbms/pages/configurerdbms/configurerdbms.component";
import { FilterRdbmsTablesComponent } from "src/app/pages/ingestions/rdbms/pages/filter-rdbms-tables/filter-rdbms-tables.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "ingestions/flatfile", component: FlatfileComponent },
  { path: "ingestions/rdbms", component: RdbmsComponent },
  { path: "ingestions/rdbms/configurerdbms", component: ConfigurerdbmsComponent },
  { path: "ingestions/rdbms/filterRdbmsTables", component: FilterRdbmsTablesComponent },

  { path: "ingestions/streamdata", component: StreamdataComponent },


  // { path: "rtl", component: RtlComponent }
];
