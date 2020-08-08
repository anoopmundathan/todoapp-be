import { Todo } from "../todos";

const generateId = () => Math.floor(Math.random() * 1000);

export const generateNewTodo = (name: string): Todo => ({
    id: generateId(),
    name,
    completed: false
});

export const addTodo = (todos: Todo[], newTodo: Todo): Todo[] => {
    todos.push(newTodo);
    return todos;
}

export const updateTodoById = (todos: Todo[], id: number): Todo[] => {
    for (const todo of todos) {
        if (todo.id === id) {
            todo.completed = !todo.completed;
        }
    }
    return todos;
}

export const getTodoById = (todos: Todo[], id: number): Todo[] => todos.filter(todo => todo.id === id);

