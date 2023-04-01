import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoSchema } from "./schemas/todo.schema";
import { TodoController } from "./controllers/todo.controller";
import { TodoService } from "./services/todo.service";
import { TodoRepository } from './repositories/todo.repository';
@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }]),
    ],
    controllers: [TodoController],
    providers: [TodoService,TodoRepository]
})
export class TodoModule { }