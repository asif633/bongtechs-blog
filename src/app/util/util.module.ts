import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizeHtmlPipe } from '../html-sanitize.pipe';
import { BlogPostPipe } from '../blog-post.pipe';
import { MathJaxDirective } from '../mathjax.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SanitizeHtmlPipe,
    BlogPostPipe,
    MathJaxDirective
  ],
  exports: [
    SanitizeHtmlPipe,
    BlogPostPipe,
    MathJaxDirective
  ]
})
export class UtilModule { }
