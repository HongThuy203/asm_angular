import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { BaseLayoutComponent } from "./layout/base-layout/base-layout.component"
import { HonmePageComponent } from "./pages/home-page/honme-page.component"
import { ProductPageComponent } from "./pages/product-page/product-page.component"
import { ProductDetailComponent } from "./pages/product-detail/product-detail.component"
import { AdminLayoutComponent } from "./layout/admin-layout/admin-layout.component"
import { DashboardPageComponent } from "./pages/admin/dashboard-page/dashboard-page.component"
import { ProductManagementComponent } from "./pages/admin/product-management/product-management.component"
import { AddProductComponent } from "./pages/admin/add-product/add-product.component"
import { EditProductComponent } from "./pages/admin/edit-product/edit-product.component"
import { NotFoundComponent } from "./pages/not-found/not-found.component"

const routes: Routes = [
    {
        path: "", component: BaseLayoutComponent, children: [
            { path: "", component: HonmePageComponent },
            { path: "products", component: ProductPageComponent },
            { path: "products/:id", component: ProductDetailComponent },
        ]
    },
    {
        path: "admin", component: AdminLayoutComponent, children: [
            { path: "", component: DashboardPageComponent },
            { path: "products", component: ProductManagementComponent },
            { path: "products/add", component: AddProductComponent },
            { path: "products/:id/edit", component: EditProductComponent },
        ]
    },
    {
        path: "**", component: NotFoundComponent
    }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
