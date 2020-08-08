import { expect } from "chai";
import { Todo } from "../todos/";
import { addTodo, generateNewTodo, getTodoById, updateTodoById } from "../todos/todoHelpers";

describe("todoHelpers", () => {
    it("should add todos", () => {
        // Given
        const initialTodo: Todo[] = [
            { id: 1, name: "todo 1", completed: false}
        ];

        const newTodo: Todo = { id: 2, name: "new todo", completed: false };

        const expected: Todo[] = [
            { id: 1, name: "todo 1", completed: false},
            { id: 2, name: "new todo", completed: false }
        ];
        // When
        const result = addTodo(initialTodo, newTodo);

        // Then
        expect(result).to.eql(expected)
    });

    it("should update todos", () => {
        // Given
        const initialTodo: Todo[] = [
            { id: 1, name: "todo 1", completed: false}
        ];

        const id = 1;

        const expected: Todo[] = [
            { id: 1, name: "todo 1", completed: true}
        ];
        // When
        const result = updateTodoById(initialTodo, id);

        // Then
        expect(result).to.eql(expected)
    });

    it("should get todo by id", () => {
        // Given
        const initialTodo: Todo[] = [
            { id: 1, name: "todo 1", completed: false},
            { id: 2, name: "todo 2", completed: false}
        ];

        const id = 2;

        const expected: Todo[] = [{ id: 2, name: "todo 2", completed: false }];

        // When
        const result = getTodoById(initialTodo, id);

        // Then
        expect(result).to.eql(expected)
    })

    it("should create a new todo", () => {
        // Given
       const name = "new todo";

        // When
        const result = generateNewTodo(name);

        // Then
        expect(result).to.have.property("id");
        expect(result).to.have.property("name");
        expect(result).to.have.property("completed");
    })

})
