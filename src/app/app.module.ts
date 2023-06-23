import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AgentRoutingModule } from './Modules/agent/agent-routing.module';
import { AgentModule } from './Modules/agent/agent.module';
import { AppComponent } from './app.component';
import { MyproprtiesComponent } from './Components/Agent-components/myproprties/myproprties.component';
import { TenantsComponent } from './Components/Agent-components/tenants/tenants.component';
import { UnitsComponent } from './Components/Agent-components/units/units.component';
import { HomeComponent } from './Components/Agent-components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MyproprtiesComponent,
    TenantsComponent,
    UnitsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgentRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
