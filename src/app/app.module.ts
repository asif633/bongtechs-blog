import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from './app.routes';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment.prod';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './sign-in/sign-in.component';
import { MarkdownModule } from 'ngx-markdown';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { PostService } from './shared/post.service';
import { SubcategoryService } from './shared/subcategory.service';
import { CategoryService } from './shared/category.service';
import { UtilModule } from './util/util.module';
import { AuthGuard } from './shared/authguard.service';
import { ManageAncientHistoryComponent } from './manage-ancient-history/manage-ancient-history.component';
import { AncientHistoryTableComponent } from './ancient-history-table/ancient-history-table.component';
import { AncientHistoryFormComponent } from './ancient-history-form/ancient-history-form.component';
import { AncientHistoryService } from './shared/ancient-history.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    SignInComponent,
    BlogPostsComponent,
    BlogPostComponent,
    ManageAncientHistoryComponent,
    AncientHistoryTableComponent,
    AncientHistoryFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    BrowserAnimationsModule,
    MarkdownModule.forRoot(),
    UtilModule
  ],
  providers: [ AuthGuard, PostService, SubcategoryService, CategoryService, AncientHistoryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
