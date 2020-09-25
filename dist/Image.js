"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Kotlin_1 = require("./Kotlin");
//! Declares com.lightningkite.butterfly.Image
class Image {
    constructor() {
    }
}
exports.Image = Image;
//! Declares com.lightningkite.butterfly.ImageReference
class ImageReference extends Image {
    constructor(uri) {
        super();
        this.uri = uri;
    }
    hashCode() {
        let hash = 17;
        hash = 31 * hash + Kotlin_1.hashAnything(this.uri);
        return hash;
    }
    equals(other) { return other instanceof ImageReference && Kotlin_1.safeEq(this.uri, other.uri); }
    toString() { return `ImageReference(uri = ${this.uri})`; }
    copy(uri = this.uri) { return new ImageReference(uri); }
}
exports.ImageReference = ImageReference;
//! Declares com.lightningkite.butterfly.ImageBitmap
class ImageImageBitmap extends Image {
    constructor(bitmap) {
        super();
        this.bitmap = bitmap;
    }
    hashCode() {
        let hash = 17;
        hash = 31 * hash + Kotlin_1.hashAnything(this.bitmap);
        return hash;
    }
    equals(other) { return other instanceof ImageImageBitmap && Kotlin_1.safeEq(this.bitmap, other.bitmap); }
    toString() { return `ImageImageBitmap(bitmap = ${this.bitmap})`; }
    copy(bitmap = this.bitmap) { return new ImageImageBitmap(bitmap); }
}
exports.ImageImageBitmap = ImageImageBitmap;
//! Declares com.lightningkite.butterfly.ImageRaw
class ImageRaw extends Image {
    constructor(raw) {
        super();
        this.raw = raw;
    }
    hashCode() {
        let hash = 17;
        hash = 31 * hash + Kotlin_1.hashAnything(this.raw);
        return hash;
    }
    equals(other) { return other instanceof ImageRaw && Kotlin_1.safeEq(this.raw, other.raw); }
    toString() { return `ImageRaw(raw = ${this.raw})`; }
    copy(raw = this.raw) { return new ImageRaw(raw); }
}
exports.ImageRaw = ImageRaw;
//! Declares com.lightningkite.butterfly.ImageRemoteUrl
class ImageRemoteUrl extends Image {
    constructor(url) {
        super();
        this.url = url;
    }
    hashCode() {
        let hash = 17;
        hash = 31 * hash + Kotlin_1.hashAnything(this.url);
        return hash;
    }
    equals(other) { return other instanceof ImageRemoteUrl && Kotlin_1.safeEq(this.url, other.url); }
    toString() { return `ImageRemoteUrl(url = ${this.url})`; }
    copy(url = this.url) { return new ImageRemoteUrl(url); }
}
exports.ImageRemoteUrl = ImageRemoteUrl;
//! Declares com.lightningkite.butterfly.ImageResource
class ImageResource extends Image {
    constructor(resource) {
        super();
        this.resource = resource;
    }
    hashCode() {
        let hash = 17;
        hash = 31 * hash + Kotlin_1.hashAnything(this.resource);
        return hash;
    }
    equals(other) { return other instanceof ImageResource && Kotlin_1.safeEq(this.resource, other.resource); }
    toString() { return `ImageResource(resource = ${this.resource})`; }
    copy(resource = this.resource) { return new ImageResource(resource); }
}
exports.ImageResource = ImageResource;
//! Declares com.lightningkite.butterfly.asImage>kotlin.String
function xStringAsImage(this_) {
    return new ImageRemoteUrl(this_);
}
exports.xStringAsImage = xStringAsImage;
//! Declares com.lightningkite.butterfly.asImage>android.net.Uri
function xUriAsImage(this_) {
    return new ImageReference(this_);
}
exports.xUriAsImage = xUriAsImage;
//! Declares com.lightningkite.butterfly.asImage>android.graphics.Bitmap
function xBitmapAsImage(this_) {
    return new ImageImageBitmap(this_);
}
exports.xBitmapAsImage = xBitmapAsImage;
//! Declares com.lightningkite.butterfly.asImage>kotlin.Int
function xIntAsImage(this_) {
    return new ImageResource(this_);
}
exports.xIntAsImage = xIntAsImage;
//# sourceMappingURL=Image.js.map