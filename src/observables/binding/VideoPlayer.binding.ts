// Generated by Butterfly TypeScript converter

import {ObservableProperty} from "../ObservableProperty";
import {Video, VideoReference, VideoRemoteUrl} from "../../Video";
import {xDisposableUntil, xViewRemovedGet} from "../../rx/DisposeCondition.ext";
import {xObservablePropertySubscribeBy} from "../ObservableProperty.ext";
import {IllegalArgumentException} from "../../kotlin/Language";

//! Declares com.lightningkite.butterfly.observables.binding.bind>com.lightningkite.butterfly.views.widget.VideoPlayer
export function xVideoPlayerBind(this_: HTMLVideoElement, video: ObservableProperty<Video | null>) {
    xDisposableUntil(xObservablePropertySubscribeBy(video, undefined, undefined, (x)=>{
        xVideoPlayerLoadVideo(this_, x);
    }), xViewRemovedGet(this_));
}

//! Declares com.lightningkite.butterfly.observables.binding.bindAndStart>com.lightningkite.butterfly.views.widget.VideoPlayer
export function xVideoPlayerBindAndStart(this_: HTMLVideoElement, video: ObservableProperty<Video | null>) {
    xDisposableUntil(xObservablePropertySubscribeBy(video, undefined, undefined, (x)=>{
        xVideoPlayerLoadVideo(this_, x);
        this_.play()
    }), xViewRemovedGet(this_));
}
//! Declares com.lightningkite.butterfly.observables.binding.bind>com.google.android.exoplayer2.ui.PlayerView
export let xPlayerViewBind = xVideoPlayerBind

function xVideoPlayerLoadVideo(this_: HTMLVideoElement, video: Video | null){
    if(video === null) {
        this_.src = "";
        return;
    } else if(video instanceof VideoReference) {
        const url = URL.createObjectURL(video.uri);
        this_.src = url;
    } else if(video instanceof VideoRemoteUrl) {
        this_.src = video.url;
    } else{
        throw new IllegalArgumentException(`Unrecognized type ${video}`, null);
    }
}