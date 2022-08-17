import { NgModule } from '@angular/core';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { SpartacusModule } from './spartacus/spartacus.module';
// import { AppRoutingModule } from '@spartacus/storefront'; // if this is imported, then it will have forRoot() call twice issue.

@NgModule({
  declarations: [CatalogComponent],
  imports: [CatalogRoutingModule, SpartacusModule],
})
export class CatalogModule {}
