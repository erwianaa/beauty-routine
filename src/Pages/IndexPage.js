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
                <li>
                    <a href="#" onClick={() => onRoutineClick(routine)} className="text-header-color-1" key={routine.id}>
                        <h4>{routine.name}</h4>
                    </a>
                </li>
            </>
        )
    });

    return (
        <div className="d-flex justify-content-center align-items-center flex-column mb-5 index-page">
            <h1 className="fw-bold mb-5">Routine List's</h1>
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