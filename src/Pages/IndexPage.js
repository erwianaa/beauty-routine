import Api from '../Api/LocalStorage';
import {useState} from 'react';

function IndexPage({onRoutineClick}) {
    const [isRefresh, setRefresh] = useState(false);


    const handleClearRoutines = () => {
        Api.clearRoutines();
        setRefresh(!isRefresh);
    }

    const routines = Api.getRoutines().map(routine => {
        return (
            <>
                <a href="#" onClick={() => onRoutineClick(routine)} className="text-header-color-1" key={routine.id}>
                    <li>{routine.name}</li>
                </a>
            </>
        )
    });

    return (
        <div className="d-flex justify-content-center align-items-center flex-column mb-5">
            <h2 className="fw-bold">Routine List's</h2>
            <ul className="mb-5">
                {routines}
            </ul>

            <button
                className="btn button-primary-2 btn-sm"
                onClick={handleClearRoutines}
            >
                Reset Routine(s)
            </button>
        </div>
    )
}

export default IndexPage;