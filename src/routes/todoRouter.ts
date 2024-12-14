import { Router } from 'express';
import { checkAuth } from '../utils';
import { TodoValidator } from '../validators';
import { TodoController } from '../controllers';

export const todoRouter = Router();

todoRouter.post(
    '/',
    checkAuth,
    TodoValidator.createTodoValidator(),
    TodoController.createTodoController
);
todoRouter.get('/', checkAuth, TodoController.getTodosController);
todoRouter.put(
    '/:id',
    checkAuth,
    TodoValidator.updateTodoValidator(),
    TodoController.updateTodoController
);
todoRouter.delete(
    '/:id',
    checkAuth,
    TodoValidator.deleteTodoValidator(),
    TodoController.deleteTodoController
);
