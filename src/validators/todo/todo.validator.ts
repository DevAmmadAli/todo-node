import { body, param } from 'express-validator';

export const createTodoValidator = () => {
    return [
        body('title').exists().withMessage('Title is required.'),
        body('description').exists().withMessage('Description is required.'),
        body('dueDate').exists().withMessage('Due date is required.'),
    ];
};

export const updateTodoValidator = () => {
    return [
        param('id')
            .exists()
            .withMessage('Todo ID is required.')
            .isInt()
            .withMessage('Todo ID must be a valid number.'),
        body('title').exists().withMessage('Title is required.'),
        body('description').optional(),
        body('status')
            .optional()
            .isBoolean()
            .withMessage('Status must be a boolean value.'),
        body('dueDate').optional(),
    ];
};

export const deleteTodoValidator = () => {
    return [
        param('id')
            .exists()
            .withMessage('Todo ID is required.')
            .isInt()
            .withMessage('Todo ID must be a valid number.'),
    ];
};
