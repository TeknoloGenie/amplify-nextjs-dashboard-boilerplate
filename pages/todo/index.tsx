import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { Authenticator, Card, Grid, Button } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"

const client = generateClient<Schema>();

export default function Todo() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt("Todo content"),
    });
  }

  function deleteTodo(id: string) {
    client.models.Todo.delete({ id });
  }

  function createConversation() {
    client.models.Conversation.create({});
  }

  function addUserToConversation(userId: string, conversationId: string) {
    client.models.UserConversations.create({userId, conversationId});
  }
  

  return (
        <>
          <h1>Messages</h1>
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
          <button onClick={createTodo}>+ new</button>
          <button onClick={createConversation}>+ new conversation</button>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id} onClick={()=> deleteTodo(todo.id)}>{todo.content}</li>
            ))}
          </ul>
        </>
  );
}
