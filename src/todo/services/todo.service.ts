import { Injectable } from '@nestjs/common';
import { TodoRepository } from '../repositories/todo.repository';
import { Todo } from '../models/todo.model';
import { CreateTodoDto } from '../dtos/create-todo.dto';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) { }

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoRepository.create(createTodoDto);
  }

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.findAll();
  }

  async findById(id: string): Promise<Todo> {
    return this.todoRepository.findById(id);
  }

  async update(id: string, createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoRepository.update(id, createTodoDto);
  }

  async delete(id: string): Promise<Todo> {
    return this.todoRepository.delete(id);
  }
}
