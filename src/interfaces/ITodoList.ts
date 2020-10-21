import {ITodoItem} from './ITodoItem'

export interface ITodoList{
    id: number;
    name: string;
    todo: ITodoItem[]
};