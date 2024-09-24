import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "@aws-amplify/ui-react/styles.css"

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
        client.models.UserConversations.create({ userId, conversationId });
    }


    return (
        <>
            landing page
        </>
    );
}
