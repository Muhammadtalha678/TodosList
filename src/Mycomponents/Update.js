import {useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import NotFound from './NotFound'
export default function Update(props) {
    const navigate = useNavigate()
    const { id } = useParams()
    let updateData = props.allTodos.find((e) => e.id === parseInt(id))
    const [updateTask, setUpdateTask] = useState(updateData ? updateData.task : '')
    const [updateStatus, setUpdateStatus] = useState(updateData ? updateData.completed : '')
    let goingData = (event) => {
        event.preventDefault()
        if (!updateTask || updateStatus === '') {
            alert("All field are required")
        }
        else {
            if (updateTask === updateData.task && updateStatus === updateData.completed) {
                alert("Todo Updated Successfully")
                navigate('/')
            }
            else {
                let updateObject = {
                    id: updateData.id,
                    task: updateTask,
                    completed: updateStatus,
                }
                let reesponse = props.onUpdate(updateObject)
                if (reesponse) {
                    alert("Todo Updated Successfully ")
                    navigate('/')
                }
            }
        }
    }
    if (!updateData) {
        return (
            <NotFound />
        )
    }
    else {
        return (
            <>
                <div className="container">
                    <h1 className='text-center'>Update Todo</h1>
                    <form onSubmit={goingData}>
                        {/* <input hidden className="form-control" id="exampleInputEmail1" value={id} onChange={(e) => setId(props.LastTodoId + 1)} name="id" /> */}
                        <div className="mb-3">
                            <label htmlFor="todoName" className="form-label">Todo Task</label>
                            <input type="text" className="form-control" id="todoName" name="todoTask"
                                value={updateTask} onChange={(e) => { setUpdateTask(e.target.value) }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="status" className="form-label">Todo Status</label>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                    value='true'
                                    onChange={(e) => { setUpdateStatus(true) }}
                                    checked={updateStatus === true}
                                />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    COMPLETE
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                    value='false'
                                    onChange={(e) => { setUpdateStatus(false) }}
                                    checked={updateStatus === false}
                                />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    PENDING
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </>
        )

    }
}