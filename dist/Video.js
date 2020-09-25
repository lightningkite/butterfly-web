"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated by Khrysalis TypeScript converter - this file will be overwritten.
// File: Video.kt
// Package: com.lightningkite.butterfly
const Kotlin_1 = require("./Kotlin");
//! Declares com.lightningkite.butterfly.Video
class Video {
    constructor() {
    }
}
exports.Video = Video;
//! Declares com.lightningkite.butterfly.VideoReference
class VideoReference extends Video {
    constructor(uri) {
        super();
        this.uri = uri;
    }
    hashCode() {
        let hash = 17;
        hash = 31 * hash + Kotlin_1.hashAnything(this.uri);
        return hash;
    }
    equals(other) { return other instanceof VideoReference && Kotlin_1.safeEq(this.uri, other.uri); }
    toString() { return `VideoReference(uri = ${this.uri})`; }
    copy(uri = this.uri) { return new VideoReference(uri); }
}
exports.VideoReference = VideoReference;
//! Declares com.lightningkite.butterfly.VideoRemoteUrl
class VideoRemoteUrl extends Video {
    constructor(url) {
        super();
        this.url = url;
    }
    hashCode() {
        let hash = 17;
        hash = 31 * hash + Kotlin_1.hashAnything(this.url);
        return hash;
    }
    equals(other) { return other instanceof VideoRemoteUrl && Kotlin_1.safeEq(this.url, other.url); }
    toString() { return `VideoRemoteUrl(url = ${this.url})`; }
    copy(url = this.url) { return new VideoRemoteUrl(url); }
}
exports.VideoRemoteUrl = VideoRemoteUrl;
//! Declares com.lightningkite.butterfly.asVideo>kotlin.String
function xStringAsVideo(this_) {
    return new VideoRemoteUrl(this_);
}
exports.xStringAsVideo = xStringAsVideo;
//! Declares com.lightningkite.butterfly.asVideo>android.net.Uri
function xUriAsVideo(this_) {
    return new VideoReference(this_);
}
exports.xUriAsVideo = xUriAsVideo;
//# sourceMappingURL=Video.js.map