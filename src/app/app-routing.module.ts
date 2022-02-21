import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecoludeComponent } from './work/recolude/recolude.component';
import { AmmcoComponent } from './work/ammco/ammco.component';
import { LeafyGreenNotesComponent } from './projects/leafy-green-notes/leafy-green-notes.component';
import { ShopTillYouPopComponent } from './projects/shop-till-you-pop/shop-till-you-pop.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'recolude', component: RecoludeComponent },
  { path: 'ammco', component: AmmcoComponent },
  { path: 'leafy-green-notes', component: LeafyGreenNotesComponent },
  { path: 'shop-till-you-pop', component: ShopTillYouPopComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
