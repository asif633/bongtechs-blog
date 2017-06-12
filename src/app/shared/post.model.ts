import { Subcategory } from './subcategory.model';
import { Category } from './category.model';

export interface Post{
    $key?: string;
    title: string;
    slug: string;
    summary: string;
    bodymd: string;
    datePublished: string;
    draft: boolean;
    doctype?: string;
    subcategories?: Subcategory[];
    category?: Category;
}