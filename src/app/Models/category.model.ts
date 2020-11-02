import { FilmModel } from './film.model';

export class CategoryModel{
    id: number;
    name: string;
    films: Array<FilmModel>;
}