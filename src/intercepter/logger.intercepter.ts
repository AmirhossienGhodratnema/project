import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

@Injectable()
export class LoggerIntercepter implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>) {

        console.log('Before route handler')
        console.log('Load handler', new Date().getTime());


        return next.handle().pipe(tap(() => console.log('After route handler', new Date().getTime())));

    };
};