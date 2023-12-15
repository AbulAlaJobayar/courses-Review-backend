import {  filter } from './filter';
import { Query } from "mongoose";
import { TQueryObj } from "../types/TQuerObj";
import { search } from './search';
import { sort } from './short';
import { pagination } from './pagination';
import { SelectedField } from './selectedField';

export const getQuery=<T>(modelQuery:Query<T[],T>,query:TQueryObj)=>{
const filtered=filter(modelQuery,query)
const searches=search(filtered,query)
const sorted=sort(searches,query)
const paginated=pagination(sorted,query)
const field=SelectedField(paginated,query)
return field
}