import { HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    
    intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
        console.log("Inside Interceptor...");
        
        let token = sessionStorage.getItem("token");
        if(token){
            console.log("Token: "+sessionStorage.getItem("token"));
            req=req.clone({
                 headers : req.headers.set('Authorization','Berear '+token)
                }
            );
        }
        return next.handle(req).pipe(
            map(data=>{                
                console.log("From Interceptor Response : "+JSON.stringify(data));                  
                let res = data;
                console.log(res);
                return data;
            }
            )
        );
    }

    

}