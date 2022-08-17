import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const dashboardRoutes: Routes = [
  {
    path: 'catalog',
    loadChildren: () =>
      import('../catalog/catalog.module').then((m) => m.CatalogModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
