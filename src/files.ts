import {from, Observable} from "rxjs";
import {map} from "rxjs/operators";

//! Declares com.lightningkite.butterfly.views.readData
export function xUriReadData(this_: File): Observable<Int8Array> {
    return from(this_.arrayBuffer()).pipe(map(x => new Int8Array(x)))
}