import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { HonmePageComponent } from './pages/home-page/honme-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { DashboardPageComponent } from './pages/admin/dashboard-page/dashboard-page.component';
import { ProductManagementComponent } from './pages/admin/product-management/product-management.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { EditProductComponent } from './pages/admin/edit-product/edit-product.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    BaseLayoutComponent,
    AdminLayoutComponent,
    HonmePageComponent,
    ProductPageComponent,
    ProductDetailComponent,
    DashboardPageComponent,
    ProductManagementComponent,
    AddProductComponent,
    EditProductComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
