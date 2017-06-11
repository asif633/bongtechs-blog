import { Injectable, Inject } from '@angular/core';
import { Subcategory } from './subcategory.model';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class SubcategoryService {

    private uid: string;

    initializeNew(): Subcategory {
        return { name: '', parent: { $key: '', name: '' } };
    }

    constructor(private afAuth: AngularFireAuth, private afd: AngularFireDatabase) {
        this.afAuth.authState.subscribe(auth => {
            if (auth != undefined && auth != null)
                this.uid = auth.uid;
        }
        );
    }

    addSubcategory(cat: Subcategory, parentKey: string) {
        if (this.uid != undefined && this.uid != null) {
            let key = this.afd.list('blog-subcategories').$ref.ref.push().key;
            this.afd.list('blog-cat-subcats').$ref.ref.child(parentKey).child(key).set(true).then(
                res => this.afd.list('blog-subcategories').$ref.ref.child(key).set(cat)
            );
        }
    }

    updateSubcategory(cas: Subcategory) {
        if (this.uid != undefined && this.uid != null) {
            return this.afd.object('blog-cat-subcats/' + cas.$key).update({ name: cas.name });
        }
    }

    getSubcategorys(): Observable<Subcategory[]> {
        return this.afd.list('blog-subcategories');
    }

    getSubcatsOfCat(catKey: string): Observable<Subcategory[]> {
        if (this.uid != undefined || this.uid != null) {
            return this.afd.list('blog-cat-subcats/' + catKey)
                .map(res => res.map(res => res.$key))
                .map(lspc => lspc.map(lessonKey => this.afd.object('blog-subcategories/' + lessonKey)))
                .mergeMap(fbojs => Observable.combineLatest(fbojs))
        }
    }

    deleteSubcategory(cas: Subcategory) {
        if (this.uid != undefined && this.uid != null) {
            return this.afd.list('blog-categories').remove(cas.$key).then(
                resove => this.afd.list('blog-cat-subcats').$ref.ref.child(cas.$key).remove()
            );
        }
    }

}