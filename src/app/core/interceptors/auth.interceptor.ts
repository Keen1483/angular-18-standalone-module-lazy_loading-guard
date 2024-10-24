import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

export function authInterceptor(
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
    const authService = inject(AuthService);

    if (!authService.getToken()) {
        return next(req);
    }

    const headers = new HttpHeaders({
        Authorization: `Bearer ${authService.getToken()}`
    });
    const modifiedReq = req.clone({ headers });
    return next(modifiedReq);

}