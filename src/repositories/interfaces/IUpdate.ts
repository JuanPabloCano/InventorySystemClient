import { Observable } from 'rxjs';

export interface IUpdate<T> {
  put(data: T): Observable<T>;
}
