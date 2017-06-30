import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';

import { CategoryFormComponent } from '../category-form/category-form.component';
import { CategoryTableComponent } from '../category-table/category-table.component';
import { BlogRoutingModule } from './blog.routing.module';
import { FormsModule } from '@angular/forms';
import { ManageCategoriesComponent } from '../manage-categories/manage-categories.component';
import { ManageSubcategoriesComponent } from '../manage-subcategories/manage-subcategories.component';
import { ManagePostsComponent } from '../manage-posts/manage-posts.component';
import { PostTableComponent } from '../post-table/post-table.component';
import { PostFormComponent } from '../post-form/post-form.component';
import { SubcategoryTableComponent } from '../subcategory-table/subcategory-table.component';
import { SubcategoryFormComponent } from '../subcategory-form/subcategory-form.component';
import { BlogComponent } from './blog.component';
import { UtilModule } from '../util/util.module';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    MarkdownToHtmlModule.forChild(),
    UtilModule
  ],
  declarations: [
    BlogComponent,
    CategoryFormComponent,
    CategoryTableComponent,
    ManageCategoriesComponent,
    ManageSubcategoriesComponent,
    ManagePostsComponent,
    PostTableComponent,
    PostFormComponent,
    SubcategoryTableComponent,
    SubcategoryFormComponent,
  ],
  providers: [ ],
})
export class BlogModule { }
