import { useLocation, useParams } from 'react-router-dom'
import NotFound from './NotFound'
export default function View(props) {
    const { viewId } = useParams()  // or const viewId = useParams() and then viewId.viewId
    let viewData = props.allTodos.find((e) => e.id === parseInt(viewId))

    if (!viewData) {
        return (
            <NotFound />
        )
    }
    else {
        return (
            <>
                <div className="container">
                    <h1 className="text-center mb-4">Your Todo</h1>
                    <div className="card">
                        <div className="card-body text-center">
                            <h5 className="card-title">Task:</h5>
                            <p className="card-text">{viewData.task}</p>
                            <h5 className="card-title">Status:</h5>
                            <p className="card-text">{viewData.completed ? "Completed" : "Pending"}</p>
                        </div>
                    </div>
                </div>
            </>
        )

    }
}