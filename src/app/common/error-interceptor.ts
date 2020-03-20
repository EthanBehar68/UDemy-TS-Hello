import {
    HttpEvent,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse,
    HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AppError } from './app-error';
import { NotFoundError } from './not-found-error';
import { BadInputError } from './bad-input-error';


// Error handling tutorial come course comments
// https://www.positronx.io/angular-error-handling-tutorial-with-examples/
export class ErrorInterceptor implements HttpInterceptor {
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        console.log("ErrorInterceptor: catching error...");;
        return next.handle(request)
            .pipe(
                retry(1),
                catchError((caughtError: HttpErrorResponse) => {
                    let errorMessage = '';
                    let regex400 = new RegExp('4\\d{2}');
                    let regex500 = new RegExp('5\\d{2}');

                    if (regex400.test(caughtError.status.toString())) {
                        //client side error
                        if (caughtError.status === 404) {
                            return throwError(new NotFoundError());
                            // Deprecated apparently
                            // return Observable.throw(new NotFoundError());
                        }
                        if (caughtError.status === 400) {
                            return throwError(new BadInputError(caughtError.message));
                            // Deprecated apparently
                            // return Observable.throw(new BadInputError(caughtError.message));
                        }
                    } else if (regex500.test(caughtError.status.toString())) {
                        //server side error
                        errorMessage =
                            'Error Status: ' + caughtError.status +
                            '\nMessage: ' + caughtError.message
                    }

                    console.log("ErrorInterceptor: " + errorMessage);
                    return throwError(new AppError(caughtError));
                    // Deprecated apparently
                    //return Observable.throw(new AppError(caughtError));

                })
            )
    }
}