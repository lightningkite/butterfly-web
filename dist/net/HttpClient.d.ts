import { Observable, SchedulerLike } from 'rxjs';
import { ConnectedWebSocket } from "./ConnectedWebSocket";
import { HttpBody } from "./HttpBody";
import { HttpOptions, HttpProgress } from "./HttpModels";
export declare class HttpClient {
    static INSTANCE: HttpClient;
    readonly GET = "GET";
    readonly POST = "POST";
    readonly PUT = "PUT";
    readonly PATCH = "PATCH";
    readonly DELETE = "DELETE";
    ioScheduler: SchedulerLike | null;
    responseScheduler: SchedulerLike | null;
    defaultOptions: HttpOptions;
    call(url: string, method?: string, headers?: Map<string, string>, body?: (HttpBody | null), options?: HttpOptions): Observable<Response>;
    callWithProgress<T>(url: string, method: string | undefined, headers: Map<string, string> | undefined, body: HttpBody | null | undefined, options: HttpOptions | undefined, parse: (response: Response) => Observable<T>): Observable<HttpProgress<T>>;
    webSocket(url: string): Observable<ConnectedWebSocket>;
}
