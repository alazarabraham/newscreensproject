import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FlatfileComponent } from "src/app/pages/ingestions/flatfile/flatfile.component";
import { RdbmsComponent } from "src/app/pages/ingestions/rdbms/rdbms.component";
import { StreamdataComponent } from "src/app/pages/ingestions/streamdata/streamdata.component";
import { HomeComponent } from "src/app/pages/home/home.component";
import { ConfigurerdbmsComponent } from "src/app/pages/ingestions/rdbms/pages/configurerdbms/configurerdbms.component";
import { FilterRdbmsTablesComponent } from "src/app/pages/ingestions/rdbms/pages/filter-rdbms-tables/filter-rdbms-tables.component";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ConfigureStreamIngestionComponent } from "src/app/pages/ingestions/streamdata/pages/configure-stream-ingestion/configure-stream-ingestion.component";
import { FilterStreamTableComponent } from "src/app/pages/ingestions/streamdata/pages/filter-stream-table/filter-stream-table.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  exports: [
    DragDropModule
  ],

  declarations: [
    FlatfileComponent,

    RdbmsComponent,
    ConfigurerdbmsComponent,
    FilterRdbmsTablesComponent,

    StreamdataComponent,
    ConfigureStreamIngestionComponent,
    FilterStreamTableComponent,
    HomeComponent,


    // RtlComponent
  ]
})
export class AdminLayoutModule { }
