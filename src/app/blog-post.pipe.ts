import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Post } from './shared/post.model';
import 'rxjs/add/operator/map';

@Pipe({
  name: 'blogPost'
})
export class BlogPostPipe implements PipeTransform {

  transform(value: Observable<Post[]>, args: string): any {
    return value.map(val => 
            val.filter(v => v.subcategories.every(
              x => v.subcategories.filter(subcat => subcat.name != args).indexOf(x) > -1
              )))
  }

}
