// Generated by Butterfly TypeScript converter
// File: Image.loadingRx.kt
// Package: com.lightningkite.butterfly
import {Image, ImageImageBitmap, ImageRaw, ImageReference, ImageRemoteUrl, ImageResource} from './Image'
import {Exception} from './Kotlin'
import {xSingleUnsuccessfulAsError} from './net/RxHttpAssist'
import {Observable, of as rxOf, from as rxFrom, throwError} from 'rxjs'
import {IllegalStateException, also} from 'Kotlin'
import {flatMap, map, map as rxMap} from 'rxjs/operators'

//! Declares com.lightningkite.butterfly.load>com.lightningkite.butterfly.Image
export function xImageLoad(this_: Image): Observable<ImageBitmap> {
    return (() => {
        try {
            return (() => {
                if (this_ instanceof ImageRaw) {
                    return rxFrom(createImageBitmap(new Blob([this_.raw])))
                } else if (this_ instanceof ImageReference) {
                    return rxFrom(createImageBitmap(this_.uri));
                } else if (this_ instanceof ImageImageBitmap) {
                    return rxOf(this_.bitmap)
                } else if (this_ instanceof ImageRemoteUrl) {
                    return rxFrom(fetch(this_.url))
                        .pipe(flatMap((x) => { return x.blob() }))
                        .pipe(flatMap((x) => { return createImageBitmap(x); }))
                } else if(this_ instanceof ImageResource) {
                    let path = this_.resource.filePath;
                    if(path){
                        return rxFrom(fetch(path))
                            .pipe(flatMap((x) => { return x.blob() }))
                            .pipe(flatMap((x) => { return createImageBitmap(x); }))
                    } else {
                        // TODO
                        return throwError(new Exception("Not able to load a resource that's not an SVG or PNG.", null))
                    }
                } else {
                    return throwError(new Exception("This shouldn't be possible - got an image object of an unknown type " + this_, null))
                }
            })()
        } catch (_e) {
            let e = _e as Exception;
            return throwError(e);
        }
    })();
}
