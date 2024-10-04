import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ShowPage from './Pages/ShowPage';
import CreatePage from './Pages/CreatePage';
import IndexPage from './Pages/IndexPage';
import Api from './Api/LocalStorage';
import {useState, useEffect} from 'react';

function App() {
	const [currentPage, setCurrentPage] = useState('index');
	const [currentRoutine, setCurrentRoutine] = useState({});

	useEffect(() => {
		Api.initializeRoutine();
		setCurrentPage('index');
	}, [])


	const handleRoutineSave = (routine) => {
		setCurrentPage('show');
		setCurrentRoutine(routine);
	}

	const handleShowRoutine = (routine) => {
		setCurrentPage('show');
		setCurrentRoutine(routine);
	}

	const handleBackClick = () => {
		setCurrentPage('index');
		setCurrentRoutine({});
	}

	const handleCreateRoutine = () => {
		setCurrentPage('create');
		setCurrentRoutine({});
	}

	const pageComponent = {
		'create': <CreatePage onRoutineSave={handleRoutineSave}/>,
		'show': <ShowPage routine={currentRoutine} />,
		'index': <IndexPage onRoutineClick={handleShowRoutine}/>
	}

	return (
    	<div>
			<nav className="navbar navbar-bg-dark mb-4">
				<div className="container-lg">
					<span className="navbar-brand mb-0 h1 text-light text-header fw-bolder">BR - Beauty Routine</span>
					<div>
						<button className="btn button-primary-1" onClick={handleCreateRoutine}>Create</button>
						<span>|</span>
						<button className="btn button-primary-2 btn-default" onClick={handleBackClick}>Back</button>
					</div>
				</div>
			</nav>

			{pageComponent[currentPage]}

			<footer></footer>
		</div>
	);
}

export default App;
