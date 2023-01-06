import { Observable } from 'rxjs';

export interface IDelete<T> {
  delete?(id: string): Observable<T>;
}
