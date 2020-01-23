import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StationDetailComponent } from './views/station-details/station-detail/station-detail.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/station/station.module').then(
        module => module.StationModule
      )
  },
  {
    // TODO Lazy Loading vom Modul wie beim StationModule bzw. Lazy Loading bei StationModule entfernen
    path: 'station/:id',
    component: StationDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
