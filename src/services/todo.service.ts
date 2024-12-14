import { TodoEntity } from '../entities';
import { UserEntity } from '../entities';
import { AppDataSource } from '../db';

export const createTodo = async (todoData: {
    title: string;
    description: string;
    dueDate: Date;
    userId: string;
}) => {
    const userRepo = AppDataSource.getRepository(UserEntity);
    const user = await userRepo.findOne({ where: { id: todoData.userId } });

    if (!user) {
        return null;
    }

    const todoRepo = AppDataSource.getRepository(TodoEntity);
    const todo = todoRepo.create({ ...todoData, user });

    await todoRepo.save(todo);

    return todo;
};

export const getTodosByUserId = async (userId: string) => {
    const todoRepo = AppDataSource.getRepository(TodoEntity);
    return await todoRepo.find({ where: { user: { id: userId } } });
};

export const updateTodo = async (
    todoId: number,
    todoData: {
        title?: string;
        description?: string;
        status?: boolean;
        dueDate?: Date;
    }
) => {
    const todoRepo = AppDataSource.getRepository(TodoEntity);
    const todo = await todoRepo.findOne({ where: { id: todoId } });

    if (!todo) {
        return null;
    }

    Object.assign(todo, todoData);
    return await todoRepo.save(todo);
};

export const deleteTodo = async (todoId: number) => {
    const todoRepo = AppDataSource.getRepository(TodoEntity);
    const todo = await todoRepo.findOne({ where: { id: todoId } });

    if (!todo) {
        return null;
    }

    await todoRepo.remove(todo);
};
