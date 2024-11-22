import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseInterceptors } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./domain/dto/createUser.dto";
import { UpdateUserDTO } from "./domain/dto/updateUser.dto";
import { ParamId } from "src/shared/decorators/paramid.decorator";


@Controller('users')
    export class UserController{
      
        constructor(private userService: UserService){}
        
        @Get()
        list(){
            return this.userService.list();
        }

        @Get(':id')
        show(@ParamId() id: number){
            return this.userService.show(id);
        }

        @Post()
        createUser(@Body() body: CreateUserDTO){
       return  this.userService.create(body);
        }

        @Patch(':id')
        updateUser(@ParamId() id: number, @Body() body: UpdateUserDTO){
        return this.userService.update(id , body);   
        }

        @Delete(':id')
         deleteUser(@ParamId () id: number){
            return this.userService.delete(id);
        }

}