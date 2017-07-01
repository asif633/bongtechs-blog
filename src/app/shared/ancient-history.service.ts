import { Injectable, Inject } from '@angular/core';
import { AncientHistory } from './ancient-history.model';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AncientHistoryService {

    private uid: string;

    initializeNew(): AncientHistory {
        return { title: '', excerpt: '', bodytext: '', publishingdate: '', draft: false};
    }

    constructor(private afAuth: AngularFireAuth, private afd: AngularFireDatabase) {
        this.afAuth.authState.subscribe(auth => {
            if (auth != undefined && auth != null)
                this.uid = auth.uid;
        }
        );
    }

    addAncientHistory(cat: AncientHistory, contentType: string) {
        if (this.uid != undefined && this.uid != null) {
            return this.afd.list(contentType).push(cat);
        }
    }

    updateAncientHistory(cas: AncientHistory, contentType: string) {
        if (this.uid != undefined && this.uid != null) {
           return this.afd.object(contentType+'/' + cas.$key).update({ title: cas.title, excerpt: cas.excerpt, bodytext: cas.bodytext, publishingdate: cas.publishingdate, draft: cas.draft });
        }
    }

    getAncientHistorys(contentType: string): Observable<AncientHistory[]> {
        return this.afd.list(contentType);
    }

    getAncientHistory(key: string, contentType: string): Observable<AncientHistory>{
        return this.afd.object(contentType+'/'+ key);
    }

    deleteAncientHistory(cas: AncientHistory, contentType: string) {
        if (this.uid != undefined && this.uid != null) {
            return this.afd.list(contentType).remove(cas.$key);
        }
    }

}