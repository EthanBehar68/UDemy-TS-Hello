import { HttpClient } from '@angular/common/http';
import { Observable, throwError, } from 'rxjs';
import { AppError } from '../common/app-error';

export class DataService {
    constructor(protected url: string, protected http: HttpClient) { }

    // Error handling tutorial come course comments
    // https://www.positronx.io/angular-error-handling-tutorial-with-examples/

    getAll(): Observable<any[]> {
        return this.http.get<any[]>(this.url);
    }

    create(resource): Observable<any> {
        // Force an error for testing
        // return throwError(new AppError());
        return this.http.post<any>(this.url, JSON.stringify(resource));
    }

    update(resource): Observable<any> {
        return this.http.patch<any>(this.url + '/' + resource.id, JSON.stringify({ isRead: true }));
    }

    deleteObservable(id): Observable<any> {                           // for forced error
        return this.http.delete<any>(this.url + '/' + id); //+ '/' + id);
    }

    deletePromise(id): Promise<any> {                                          // for forced error
        return this.http.delete<any>(this.url + '/' + id).toPromise(); //+ '/' + id);
    }
}
