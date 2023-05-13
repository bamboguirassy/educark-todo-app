import { useEffect, useState } from "react";
import TodoService from "../../service/todoService";
import { Link } from "react-router-dom";

export default function TodoList() {
    // declarer la liste des todos
    const [todos, setTodos] = useState([]);

    function findAll() {
        TodoService.findAll()
            .then((response) => {
                setTodos(response.data);
            }).catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        findAll();
    }, []);

    return (
        <div>
            <h1>TodoList</h1>
            <div className="table-responsive">
                <table className="table table-bordered table-striped table-condensed">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Completed</th>
                            <th>User Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo) => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>{todo.completed ? "Oui" : "Non"}</td>
                                <td>{todo.userId}</td>
                                <td>
                                    <button className="btn btn-sm btn-danger">Supprimer</button>
                                    <Link to={`/todos/${todo.id}`} className="btn btn-sm btn-primary">Afficher</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );


}