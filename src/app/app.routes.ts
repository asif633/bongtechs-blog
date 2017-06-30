import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './shared/authguard.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { ManageAncientHistoryComponent } from './manage-ancient-history/manage-ancient-history.component';

const routes: Routes = [
    {path: '', component: AppComponent, children: [
        {path: '', component: BlogPostsComponent},
        {path: 'posts/:slug', component: BlogPostComponent},
        {path: 'manage-blogs', loadChildren: './manage-blogs/blog.module#BlogModule', canLoad: [AuthGuard]},
        {path: 'signin', component: SignInComponent},
        {path: 'ancient-history', component: ManageAncientHistoryComponent, canActivate:[AuthGuard]}
    ]},
    { path: '**', component: PageNotFoundComponent }
];
export const appRoutes = RouterModule.forRoot(routes, {useHash: false, preloadingStrategy: PreloadAllModules});