import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/Components/Agent-components/home/home.component';
import { MyproprtiesComponent } from 'src/app/Components/Agent-components/myproprties/myproprties.component';
import { TenantsComponent } from 'src/app/Components/Agent-components/tenants/tenants.component';
import { UnitsComponent } from 'src/app/Components/Agent-components/units/units.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'myproprties', component: MyproprtiesComponent},
  {path: 'tenants', component: TenantsComponent},
  {path: 'units', component: UnitsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
