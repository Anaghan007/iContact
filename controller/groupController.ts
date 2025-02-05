import { Request, Response } from "express";
import GroupsTable from "../db/GroupSchema";
import { IGroup } from "../models/IGroups";
import mongoose from "mongoose";

/**
@usage : Get all groups
@methodm: GET
@params : no-params
@url : http://localhost:9999/groups
 */

export const getAllGroups = async (request:Request, response:Response) => {
    try{
        let groups: IGroup[] | undefined = await GroupsTable.find();
        if(groups){
            return response.status(200).json(groups);
        }
    }
    catch (error: any){
        return response.status(500).json({"msg":"Data Not Found"});
    }
}