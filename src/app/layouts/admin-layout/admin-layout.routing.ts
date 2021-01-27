import { Routes } from "@angular/router";

import { FlatfileComponent } from "src/app/pages/ingestions/flatfile/flatfile.component";
import { RdbmsComponent } from "src/app/pages/ingestions/rdbms/rdbms.component";
import { StreamdataComponent } from "src/app/pages/ingestions/streamdata/streamdata.component";
import { HomeComponent } from "src/app/pages/home/home.component";
import { ConfigurerdbmsComponent } from "src/app/pages/ingestions/rdbms/pages/configurerdbms/configurerdbms.component";
import { FilterRdbmsTablesComponent } from "src/app/pages/ingestions/rdbms/pages/filter-rdbms-tables/filter-rdbms-tables.component";
import { ConfigureStreamIngestionComponent } from "src/app/pages/ingestions/streamdata/pages/configure-stream-ingestion/configure-stream-ingestion.component";
import { FilterStreamTableComponent } from "src/app/pages/ingestions/streamdata/pages/filter-stream-table/filter-stream-table.component";
import { ConfigureFlatFileIngestionComponent } from "src/app/pages/ingestions/flatfile/pages/configure-flat-file-ingestion/configure-flat-file-ingestion.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";


// ROUTES
export const AdminLayoutRoutes: Routes = [
  { path: "home", component: HomeComponent },
  // flat file routes

  { path: "ingestions/flatfile", component: FlatfileComponent },
  { path: "ingestions/flatile/configureIngestion", component: ConfigureFlatFileIngestionComponent },



  // RDBMS routes
  { path: "ingestions/rdbms", component: RdbmsComponent },
  { path: "ingestions/rdbms/configureIngestion", component: ConfigurerdbmsComponent },
  { path: "ingestions/rdbms/filterTables", component: FilterRdbmsTablesComponent },

  // Stream data routes
  { path: "ingestions/streamdata", component: StreamdataComponent },
  { path: "ingestions/streamdata/configureIngestion", component: ConfigureStreamIngestionComponent },
  { path: "ingestions/streamdata/filterTable", component: FilterStreamTableComponent },



  // { path: "rtl", component: RtlComponent }
];
