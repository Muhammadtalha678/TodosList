import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function AddTodo(props) {
    const navigate = useNavigate()
    const [todoTask, setTodoTask] = useState("")
    const [status, setStatus] = useState("")
    // const [id, setId] = useState("")
    let id
    let goingData = (event) => {
        event.preventDefault()
        if (!todoTask || !status) {
            alert("Todo task or status required!!")
        }
        else {
            if (props.allTodos.length > 0) {
                let lastElement = props.allTodos[props.allTodos.length-1]
                id = lastElement.id + 1
                // console.log(id);
            }
            else {
                id = 1
            }
            
            let todoObject = {
                id: id,
                task: todoTask,
                completed: status === 'true' ? true : false,
            }
            let response = props.addTodo(todoObject)
            setTodoTask('')
            setStatus('')
            if (response) {
                alert("Todo Added Successfully ")
                navigate('/')
            }
        }
    }
    return (
        <div className="container">
            <h1 className='text-center'>Add Todo</h1>
            <form onSubmit={goingData}>
                {/* <input hidden className="form-control" id="exampleInputEmail1" value={id} onChange={(e) => setId(props.LastTodoId + 1)} name="id" /> */}
                <div className="mb-3">
                    <label htmlFor="todoName" className="form-label">Todo Task</label>
                    <input type="text" className="form-control" id="todoName" name="todoTask"
                        value={todoTask} onChange={(e) => setTodoTask(e.target.value)}
                    />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Todo Status</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            onChange={(e) => { setStatus('true') }} checked={status === 'true'}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            COMPLETE
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                            onChange={(e) => { setStatus('false') }} checked={status === 'false'}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            PENDING
                        </label>
                    </div>
                    {/* <input type="text" className="form-control" id="status" name="todoStatus"
                        value={status} onChange={(e) => setStatus(e.target.value)} /> */}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
} 