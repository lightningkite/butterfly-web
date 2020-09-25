import { Image } from '../Image';
import { DrawableResource } from "./DrawableResource";
import { Video } from "../Video";
export declare function xImageViewLoadImage(this_: HTMLImageElement, image: (Image | null)): void;
export declare function imageViewSetImageResource(this_: HTMLImageElement, resource: DrawableResource): void;
export declare function xImageViewLoadVideoThumbnail(this_: HTMLImageElement, video: Video | null): void;
