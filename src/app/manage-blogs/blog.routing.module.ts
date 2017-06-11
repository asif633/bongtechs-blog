import { Routes, RouterModule } from '@angular/router';
import { CategoryTableComponent } from '../category-table/category-table.component';
import { CategoryFormComponent } from '../category-form/category-form.component';
import { BlogComponent } from './blog.component';
import { AuthGuard } from '../shared/authguard.service';
import { ManageCategoriesComponent } from '../manage-categories/manage-categories.component';
import { ManageSubcategoriesComponent } from '../manage-subcategories/manage-subcategories.component';
import { ManagePostsComponent } from '../manage-posts/manage-posts.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path: '', component: BlogComponent, canActivateChild: [AuthGuard], children: [
        {path: 'manage-categories', component: ManageCategoriesComponent},
        {path: 'manage-subcategories', component: ManageSubcategoriesComponent},
        {path: 'manage-posts', component: ManagePostsComponent},
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BlogRoutingModule { }