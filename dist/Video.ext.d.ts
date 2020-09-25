import { Video } from './Video';
import { Image } from './Image';
import { Observable } from 'rxjs';
import { PointF } from './views/geometry/PointF';
export declare function xVideoThumbnail(this_: Video, timeMs?: number, size?: (PointF | null)): Observable<Image>;
