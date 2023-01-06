import { Observable } from 'rxjs';

export interface IGet<T> {
  get(): Observable<T[]>;

  getById?(id: string): Observable<T>;
}
