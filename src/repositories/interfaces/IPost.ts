import { Observable } from 'rxjs';

export interface IPost<T> {
  post(data: T): Observable<T>;
}
