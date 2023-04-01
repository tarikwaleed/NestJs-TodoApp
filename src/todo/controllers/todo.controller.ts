import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import { CreateTodoDto } from '../dtos/create-todo.dto';
import { Todo } from '../models/todo.model';

@Controller('api/todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) { }

    @Get()
    async findAll(): Promise<Todo[]> {
        return this.todoService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Todo> {
        return this.todoService.findById(id);
    }

    @Post()
    async create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
        return this.todoService.create(createTodoDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() createTodoDto: CreateTodoDto): Promise<Todo> {
        return this.todoService.update(id, createTodoDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Todo> {
        return this.todoService.delete(id);
    }
}
