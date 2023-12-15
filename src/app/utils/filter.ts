import { Query } from "mongoose";
import { TQueryObj } from "../types/TQuerObj";

export const filter=<T>(modelQuery:Query<T[],T>,query:TQueryObj)=>{
    const queryObj={...query}
    const exclude=[
     'page',
     'searchTerm',
     'limit',
     'sortBy',
     'sortOrder',
     'fields',
 
    ]
    exclude.forEach((key)=>delete queryObj[key])
    modelQuery=modelQuery.find(queryObj)
    return modelQuery
}