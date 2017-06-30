import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizeHtmlPipe } from '../html-sanitize.pipe';
import { BlogPostPipe } from '../blog-post.pipe';
import { MathJaxDirective } from '../mathjax.directive';
import {NgxPaginationModule} from 'ngx-pagination';
import { LoginService } from '../shared/login.service';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    CKEditorModule
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
    CKEditorModule
  ]
})
export class UtilModule { }
