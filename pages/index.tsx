import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { Authenticator, Card, Grid } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

const client = generateClient<Schema>();

export default function App() {
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
        
    <Authenticator>
      {({ signOut }) => (
        <>
          <Grid
            columnGap="0.5rem"
            rowGap="0.5rem"
            templateColumns="1fr 1fr 1fr"
            templateRows="1fr 3fr 1fr"
          >
            <Card
              columnStart="1"
              columnEnd="-1"
            >
              Header
            </Card>
            <Card
              columnStart="1"
              columnEnd="2"
            >
              Nav
            </Card>
            <Card
              columnStart="2"
              columnEnd="-1"
            >
              Main
            </Card>
            <Card
              columnStart="2"
              columnEnd="-1"
            >
              Footer
            </Card>
          </Grid>
          <button onClick={signOut}>Sign out</button>
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
          <div>
            🥳 App successfully hosted. Try creating a new todo.
            <br />
            <a href="https://docs.amplify.aws/gen2/start/quickstart/nextjs-pages-router/">
              Review next steps of this tutorial.
            </a>
          </div>
        </>
      )}
    </Authenticator>
  );
}
