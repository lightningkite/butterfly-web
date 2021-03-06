import { Codable } from '../Codable';
import { HttpMediaType } from './HttpMediaType';
import { Observable } from "rxjs";
import { Image } from "../Image";
export declare class HttpBody {
    data: BodyInit;
    type: HttpMediaType;
    constructor(data: BodyInit, type: HttpMediaType);
    getBlobOrString(): Blob | string;
}
export declare class HttpBodyPart {
    name: string;
    value: string | null;
    filename: string | null;
    body: HttpBody;
}
export declare function xAnyToJsonHttpBody(this_: Codable): HttpBody;
export declare function xByteArrayToHttpBody(this_: ArrayBuffer, mediaType: HttpMediaType): HttpBody;
export declare function xStringToHttpBody(this_: string, mediaType?: HttpMediaType): HttpBody;
export declare function xUriToHttpBody(this_: File): Observable<HttpBody>;
export declare function xImageToHttpBody(this_: Image, maxDimension?: number, maxBytes?: number): Observable<HttpBody>;
export declare function multipartFormBody(...parts: HttpBodyPart[]): HttpBody;
export declare function multipartFormFilePart(name: string, valueOrFilename?: string, body?: HttpBody): HttpBodyPart;
export declare function multipartFormValuePart(name: string, value: string): HttpBodyPart;
