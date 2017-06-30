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

    addAncientHistory(cat: AncientHistory) {
        if (this.uid != undefined && this.uid != null) {
            return this.afd.list('ancient-history').push(cat);
        }
    }

    updateAncientHistory(cas: AncientHistory) {
        if (this.uid != undefined && this.uid != null) {
           return this.afd.object('ancient-history/' + cas.$key).update({ title: cas.title, excerpt: cas.excerpt, bodytext: cas.bodytext, publishingdate: cas.publishingdate, draft: cas.draft });
        }
    }

    getAncientHistorys(): Observable<AncientHistory[]> {
        return this.afd.list('ancient-history');
    }

    getAncientHistory(key: string): Observable<AncientHistory>{
        return this.afd.object('ancient-history/'+ key);
    }

    deleteAncientHistory(cas: AncientHistory) {
        if (this.uid != undefined && this.uid != null) {
            return this.afd.list('ancient-history').remove(cas.$key);
        }
    }

}