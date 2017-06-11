import { Category } from './category.model';
export interface Subcategory{
    $key?: string;
    name: string;
    parent?: Category;
}