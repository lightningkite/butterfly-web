import { ObservableProperty } from "../ObservableProperty";
import { Video } from "../../Video";
export declare function xVideoPlayerBind(this_: HTMLVideoElement, video: ObservableProperty<Video | null>): void;
export declare function xVideoPlayerBindAndStart(this_: HTMLVideoElement, video: ObservableProperty<Video | null>): void;
export declare let xPlayerViewBind: typeof xVideoPlayerBind;
