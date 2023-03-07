import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private route: ActivatedRoute, private router: Router) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request)
            .pipe(
                map(res => {
                    return res;
                }),
                catchError((error: HttpErrorResponse) => this.handleError(error))
            );
    }

    private handleError(error) {
        let errorMsg = '';
        // put consoles to check error message
        if (error.error instanceof ErrorEvent) {
            console.log('This is client side error');
            errorMsg = `Error: ${error.error.message}`;
        } else {
            console.log('This is server side error');
            errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        console.log(errorMsg, 'errorMsg')
        this.router.navigate(['**'], { relativeTo: this.route });
        return throwError(errorMsg);
    }
}