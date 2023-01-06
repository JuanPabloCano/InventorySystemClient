import { IDelete } from './interfaces/IDelete';
import { IGet } from './interfaces/IGet';
import { IUpdate } from './interfaces/IUpdate';
import { IPost } from './interfaces/IPost';

export interface IBaseRepository<T> extends IGet<T>, IPost<T>, IDelete<T>, IUpdate<T> {
}
