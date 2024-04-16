import React from 'react'
import TodoItem from "./TodoItem";
export default function Todos(props) {
    return (

        <div className='container my-3'>
            <h1 className='text-center'>Todos List</h1>

            {
                props.allTodos.length === 0 ? <><h3 className='text-center'>No Todos To Display</h3> </> :
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Task</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.allTodos.map((todoObject, index) => {
                                    return <TodoItem todoObject={todoObject} key={todoObject.id} index={index} onDelete={props.onDelete} />
                                })
                            }

                        </tbody>
                    </table>}
        </div>

    )
}
