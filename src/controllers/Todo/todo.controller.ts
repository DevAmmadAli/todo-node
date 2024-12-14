import { todoService } from '../../services/index';
import { errorHandlerWrapper } from '../../utils/errorHandler';
import httpStatus from 'http-status';

const createTodoHandler = async (req, res) => {
    const { title, description, dueDate } = req.body;
    const userId = req.user.id;

    try {
        const todo = await todoService.createTodo({
            title,
            description,
            dueDate,
            userId,
        });

        res.status(httpStatus.CREATED).json(todo);
    } catch (error: any) {
        res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
    }
};

const getTodosHandler = async (req, res) => {
    const userId = req.user.id;

    console.log(userId);

    try {
        const todos = await todoService.getTodosByUserId(userId);
        res.json(todos);
    } catch (error: any) {
        res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
    }
};

const updateTodoHandler = async (req, res) => {
    const { id } = req.params;
    const { title, description, status, dueDate } = req.body;

    try {
        const updatedTodo = await todoService.updateTodo(id, {
            title,
            description,
            status,
            dueDate,
        });
        res.json(updatedTodo);
    } catch (error: any) {
        res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
    }
};

const deleteTodoHandler = async (req, res) => {
    const { id } = req.params;

    try {
        await todoService.deleteTodo(id);
        res.status(httpStatus.NO_CONTENT).send();
    } catch (error: any) {
        res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
    }
};

export const createTodoController = errorHandlerWrapper(createTodoHandler);
export const getTodosController = errorHandlerWrapper(getTodosHandler);
export const updateTodoController = errorHandlerWrapper(updateTodoHandler);
export const deleteTodoController = errorHandlerWrapper(deleteTodoHandler);
