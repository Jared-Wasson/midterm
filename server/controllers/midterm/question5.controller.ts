import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Skip } from 'server/decorators/skip.decorator';
import { Todo } from 'server/entities/todo.entity';
import { AuthGuard } from 'server/providers/guards/auth.guard';
import { TodosService } from 'server/providers/services/todos.service';

class TodoPostBody {
  content: string;
}

class TodoPutBody{
  todo: Todo;
}


@Controller()
@Skip(AuthGuard)
export class Question5Controller {
  constructor(private todosService: TodosService) {}

  @Get('/todos')
  public async index() {
    const todos = await this.todosService.findAll();
    return { todos };
  }


  @Post('/todos')
  public async createTodo(@Body() body: TodoPostBody){
    let todo = new Todo();
    todo.content = body.content;
    todo.isComplete = false;
    const saveNewTodo = await this.todosService.saveTodo(todo);
    return todo
    
  }

  @Put('/todos')
  public async updateStatus(@Body() body: TodoPutBody){
      console.log(body.todo.content)
      body.todo.isComplete = !body.todo.isComplete;
      const updateTodo = await this.todosService.saveTodo(body.todo);

  }
}
