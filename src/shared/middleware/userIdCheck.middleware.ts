import { BadRequestException, NestMiddleware } from "@nestjs/common";
import { NextFunction, Response, Request } from "express";

export class UserIdCheckMiddleware implements NestMiddleware {
    use(req : Request, _res: Response, next : NextFunction){

        const useId = req.params.id;
        if(!useId){
            throw new BadRequestException('User ID is required');
        }
        if(isNaN(Number(useId))){
         throw new BadRequestException('User ID must be a number')
        }
        next();
    }

}