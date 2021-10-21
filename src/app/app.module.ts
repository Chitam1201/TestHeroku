import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarComponent } from './component/star/star.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutes } from './routes/admin.routing';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LoginComponent } from './component/login/login.component';
import { ProductAddComponent } from './component/product-add/product-add.component';


const routes: Routes = [
  { path: 'productlist', component: ProductListComponent },
  { path: 'productdetail/:id', component: ProductDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: 'productlist' },
  { path: 'login', component: LoginComponent },
  { path: 'productadd', component: ProductAddComponent },
  { path: '**', component: NotFoundComponent }
]



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    StarComponent,
    ProductAddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutes,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
