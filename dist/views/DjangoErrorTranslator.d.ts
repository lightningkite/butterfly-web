import { Observable } from 'rxjs';
import { StringBuilder } from '../kotlin/kotlin.text';
import { ViewString } from './ViewString';
export declare class DjangoErrorTranslator {
    readonly connectivityErrorResource: string;
    readonly serverErrorResource: string;
    readonly otherErrorResource: string;
    constructor(connectivityErrorResource: string, serverErrorResource: string, otherErrorResource: string);
    handleNode(builder: StringBuilder, node: (any | null)): void;
    parseError(code: number, error: (string | null)): ViewString;
    wrap<T>(callback: ((result: (T | null), error: (ViewString | null)) => void)): ((code: number, result: (T | null), error: (string | null)) => void);
    wrapNoResponse(callback: ((error: (ViewString | null)) => void)): ((code: number, error: (string | null)) => void);
    parseException(exception: any): Observable<ViewString>;
}
