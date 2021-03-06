// Generated by Butterfly TypeScript converter
// File: Video.kt
// Package: com.lightningkite.butterfly
import {Video, VideoReference, VideoRemoteUrl} from './Video'
import {Image, ImageImageBitmap, ImageRemoteUrl} from './Image'
import {Exception, IllegalArgumentException} from './kotlin/Language'
import {HttpClient} from './net/HttpClient'
import {Observable, Observer} from 'rxjs'
import {PointF} from './views/geometry/PointF'

//! Declares com.lightningkite.butterfly.thumbnail>com.lightningkite.butterfly.Video
export function xVideoThumbnail(this_: Video, timeMs: number = 2000, size: (PointF | null) = null): Observable<Image> {
    return new Observable<Image>((em: Observer<Image>): void => {
        if(this_ instanceof VideoReference) {
            const url = URL.createObjectURL(this_.uri);
            videoUrlToBitmap(url, timeMs, (x)=>em.next(x), (e)=>em.error(e))
        } else if(this_ instanceof VideoRemoteUrl){
            videoUrlToBitmap(this_.url, timeMs, (x)=>em.next(x), (e)=>em.error(e))
        } else {
            em.error(new IllegalArgumentException(`Unrecognized type ${this_}`, null))
        }
    });
}

function videoUrlToBitmap(url: string, timeMs: number = 2000, onResult: (img: Image)=>void, onFail: (e: any)=>void) {
    let video = document.createElement('video');
    let timeupdate = function () {
        if (snapImage()) {
            video.removeEventListener('timeupdate', timeupdate);
            video.pause();
        }
    };
    video.addEventListener('loadeddata', function () {
        if (snapImage()) {
            video.removeEventListener('timeupdate', timeupdate);
        }
    });
    video.addEventListener('error', function (it) {
        onFail(it.error);
    });
    let snapImage = function () {
        let canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d')!.drawImage(video, 0, 0, canvas.width, canvas.height);
        let image = canvas.toDataURL();
        let success = image.length > 10000;
        if (success) {
            onResult(new ImageRemoteUrl(image));
        }
        return success;
    };
    video.addEventListener('timeupdate', timeupdate);
    video.preload = 'metadata';
    video.src = url;
    // Load video in Safari / IE11
    video.muted = true;
    video.currentTime = timeMs / 1000;
    if((video as any).playsInline){
        (video as any).playsInline = true;
    }
    video.play();
}