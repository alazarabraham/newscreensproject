import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FlatfileComponent } from "src/app/pages/ingestions/flatfile/flatfile.component";
import { RdbmsComponent } from "src/app/pages/ingestions/rdbms/rdbms.component";
import { StreamdataComponent } from "src/app/pages/ingestions/streamdata/streamdata.component";
import { HomeComponent } from "src/app/pages/home/home.component";
import { ConfigurerdbmsComponent } from "src/app/pages/ingestions/rdbms/pages/configurerdbms/configurerdbms.component";
import { FilterRdbmsTablesComponent } from "src/app/pages/ingestions/rdbms/pages/filter-rdbms-tables/filter-rdbms-tables.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    FlatfileComponent,
    RdbmsComponent,
    ConfigurerdbmsComponent,
    FilterRdbmsTablesComponent,
    StreamdataComponent,
    HomeComponent,


    // RtlComponent
  ]
})
export class AdminLayoutModule { }
