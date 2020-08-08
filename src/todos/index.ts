export interface Todo {
  id: number;
  name: string;
  completed: boolean;
}

export const todos: Todo[] = [
  { id: 1, name: "Learn rust", completed: false },
  { id: 2, name: "Learn phython", completed: false },
  { id: 3, name: "Learn react", completed: true },
  { id: 4, name: "Learn java", completed: false }
];
