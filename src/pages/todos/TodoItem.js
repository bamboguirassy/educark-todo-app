import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TodoService from "../../service/todoService";

export default function TodoItem() {
    const [todo, setTodo] = useState({});// todo = {id: 1, title: "delectus aut autem", completed: false, userId: 1}
    const { id } = useParams();

    const loadTodo = () => {
        TodoService.findById(id)
            .then((response) => {
                setTodo(response.data);
            }).catch(() => {
                console.log("erreur");
            })
    };

    useEffect(() => {
        loadTodo();
    }, [id]);


    return (
        <div>
            <h1>TodoItem - {id}</h1>
            <div className="card">
                <div className="card-header">
                    <h3>{todo.title}</h3>
                    <h4>{todo.user_id}</h4>
                    <h5>{todo.completed ? "Oui" : "Non"}</h5>
                </div>
            </div>
        </div>
    );
}