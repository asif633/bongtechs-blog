import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizeHtmlPipe } from '../html-sanitize.pipe';
import { BlogPostPipe } from '../blog-post.pipe';
import { MathJaxDirective } from '../mathjax.directive';
import {NgxPaginationModule} from 'ngx-pagination';
import { LoginService } from '../shared/login.service';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  declarations: [
    SanitizeHtmlPipe,
    BlogPostPipe,
    MathJaxDirective
  ],
  providers: [ LoginService ],
  exports: [
    SanitizeHtmlPipe,
    BlogPostPipe,
    MathJaxDirective,
    NgxPaginationModule,
  ]
})
export class UtilModule { }
