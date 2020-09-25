"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DisposeCondition_ext_1 = require("../rx/DisposeCondition.ext");
const ImageView_1 = require("./ImageView");
const Video_ext_1 = require("../Video.ext");
//! Declares com.lightningkite.butterfly.views.loadVideoThumbnail>android.widget.ImageView
function xImageViewLoadVideoThumbnail(this_, video) {
    if (video === null) {
        return;
    }
    ImageView_1.xImageViewLoadImage(this_, null);
    DisposeCondition_ext_1.xDisposableForever(Video_ext_1.xVideoThumbnail(video, undefined, undefined).subscribe((it) => {
        ImageView_1.xImageViewLoadImage(this_, it);
    }, (it) => {
        ImageView_1.xImageViewLoadImage(this_, null);
    }));
}
exports.xImageViewLoadVideoThumbnail = xImageViewLoadVideoThumbnail;
//# sourceMappingURL=ImageView.loadVideoThumbnail.js.map