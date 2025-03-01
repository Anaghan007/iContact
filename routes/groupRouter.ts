import { Router, Request, Response } from "express";
import * as groupController from "../controller/groupController";

const groupRouter : Router = Router();

/**
 * @usage : Get all groups
@methodm: GET
@params : no-params
@url : http://localhost:9999/groups
 */

groupRouter.get("/", async(request:Request, response:Response) => {
    await groupController.getAllGroups(request,response)
})

export default groupRouter