import { Injectable, Inject } from '@angular/core';
import { Post } from './post.model';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subcategory } from './subcategory.model';

@Injectable()
export class PostService {

    private uid: string;

    initializeNew(): Post {
        return { title: '', slug: '', summary: '', bodymd: '', datePublished: '', draft: true };
    }

    constructor(private afAuth: AngularFireAuth, private afd: AngularFireDatabase) {
        this.afAuth.authState.subscribe(auth => {
            if (auth != undefined && auth != null)
                this.uid = auth.uid;
        }
        );
    }

    addPost(cat: Post, catKey: string, subCatKey: Subcategory[]) {
        if (this.uid != undefined && this.uid != null) {
            //return this.afd.list('blog-posts').push(cat);
            let k = this.afd.list('blog-posts').$ref.ref.push().key;
            return this.afd.list('blog-cat-posts').$ref.ref.child(catKey).child(k).set(true).then(res => 
                subCatKey.forEach(subcat => {
                    this.afd.list('blog-subcat-posts').$ref.ref.child(subcat.$key).child(k).set(true).then(res =>
                        this.afd.list('blog-user-posts').$ref.ref.child(this.uid).child(k).set(true).then(res => 
                            this.afd.list('blog-posts').$ref.ref.child(k).set(cat)
                    )
                )
                })
            );
        }
    }

    updatePost(cas: Post) {
        if (this.uid != undefined && this.uid != null) {
            return this.afd.object('blog-posts/' + cas.$key).update({ title: cas.title, slug: cas.slug, summary: cas.summary, bodymd: cas.bodymd, datePublished: cas.datePublished, draft: cas.draft, subcategories: cas.subcategories, category: cas.category });
        }
    }

    getPosts(pageNum: number): Observable<Post[]> {
        return this.afd.list('blog-posts', {
            query: {
                limitToFirst: (pageNum * 10)
                }
        });
    }

    getCategoryPosts(catKey: string, pageNum: number): Observable<Post[]> {
            return this.afd.list('blog-cat-posts/' + catKey, {
                query: {
                limitToFirst: (pageNum * 10)
                }
            })
                .map(res => res.map(res => res.$key))
                .map(lspc => lspc.map(lessonKey => this.afd.object('blog-posts/' + lessonKey)))
                .mergeMap(fbojs => Observable.combineLatest(fbojs))
    }

    getUserPosts(pageNum: number): Observable<Post[]> {
        if (this.uid != undefined || this.uid != null) {
            return this.afd.list('blog-user-posts/' + this.uid, {
                query: {
                limitToFirst: (pageNum * 10)
                }
            })
                .map(res => res.map(res => res.$key))
                .map(lspc => lspc.map(lessonKey => this.afd.object('blog-posts/' + lessonKey)))
                .mergeMap(fbojs => Observable.combineLatest(fbojs))
        }
    }

    getSubcategoryPosts(catKeys: string[], pageNum: number): Observable<Post[]> {
            let catKeysObs = Observable.from(catKeys);
            return catKeysObs.
            switchMap(catkey => this.afd.list('blog-subcat-posts/' + catkey, {
                query: {
                limitToFirst: (pageNum * 10)
                }
            }))
                .map(res => res.map(res => res.$key))
                .map(lspc => lspc.map(lessonKey => this.afd.object('blog-posts/' + lessonKey)))
                .mergeMap(fbojs => Observable.combineLatest(fbojs))
                .distinct(res => console.log(res))
    }

    getPostBySlug(slug: string): Observable<Post[]> {
        return this.afd.list('blog-posts', {
            query: {
                orderByChild: 'slug',
                equalTo: slug
            }
        });
    }

    deletePost(cas: Post) {
        if (this.uid != undefined && this.uid != null) {
            return this.afd.list('blog-posts').remove(cas.$key);
        }
    }

}