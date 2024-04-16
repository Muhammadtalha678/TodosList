import { Link } from "react-router-dom";
// import View from "./View";
export default function TodoItem({ todoObject, index, onDelete, Key }) {
    // console.log(todoObject);
    return (
        <tr>
            <th >{index + 1}</th>
            <td>{todoObject.task}</td>
            <td>{todoObject.completed ? <i className="fa fa-check"></i> : <i className="fa fa-spinner"></i>}</td>

            <td>
                <Link type="button" className="btn btn-primary" to={{ pathname: `/updateTodo/${todoObject.id}` }}> Update</Link>
                <Link type="button" className="btn btn-success" to={{ pathname: `/viewTodo/${todoObject.id}` }} state={{ viewData: todoObject }}> View</Link>
                <button type="button" className="btn btn-danger" onClick={() => { onDelete(todoObject) }}>Delete</button>
            </td>
        </tr >

    );
}