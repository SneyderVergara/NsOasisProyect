import { NO_ERRORS_SCHEMA, NgModule } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing';
import { HomeComponent } from "./components/home/home";
import { TiendaComponent } from "./components/productos/productos";
import { ReservasComponent } from "./components/reservas/reservas";
import { EventosComponent } from "./components/eventos/eventos";
import { LoginComponent } from "./components/login/login";

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        TiendaComponent,
        ReservasComponent,
        EventosComponent,
        LoginComponent
    ],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}