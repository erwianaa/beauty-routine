import {useState} from 'react';
import Api from '../Api/LocalStorage';

function CreatePage({onRoutineSave}) {
	const [routine, setRoutine] = useState({
		name: '',
		description: '',
		steps: []
	});
	const [newStep, setNewStep] = useState({
		id: null,
		productName: '',
		stepDescription: '',
		duration: '',
		imageUrl: ''
	});
	const [isEditing, setIsEditing] = useState(false);


    const validateUrl = (url) => {
		return url.startsWith('http://') || url.startsWith('https://');
	};

	const handleRoutineChange = (e) => {
		const { name, value } = e.target;
		setRoutine((prevRoutine) => ({
			...prevRoutine,
			[name]: value,
		}));
	};

	const handleStepChange = (e) => {
		const { name, value } = e.target;
		setNewStep((prevStep) => ({
			...prevStep,
			[name]: value,
		}));
	};

	const handleAddStep = (e) => {
		e.preventDefault();
        
		if (newStep.productName && newStep.stepDescription) {
			if (isEditing) {
				setRoutine((prevRoutine) => ({
					...prevRoutine,
					steps: prevRoutine.steps.map(step => (step.id === newStep.id ? newStep : step))
				}));
			} else {
				setRoutine((prevRoutine) => ({
					...prevRoutine,
					steps: [...prevRoutine.steps, { ...newStep, id: prevRoutine.steps.length + 1 }]
				}));
			}
			resetStepForm();
		}
	};

	const handleEditStep = (step) => {
		setNewStep(step);
		setIsEditing(true);
	};

	const resetStepForm = () => {
		setNewStep({
			id: null,
			productName: '',
			stepDescription: '',
			duration: '',
			imageUrl: 'https://placehold.co/100x100'
		});
		setIsEditing(false);
	};

    const handleRemoveStep = (id) => {
		setRoutine((prevRoutine) => ({
			...prevRoutine,
			steps: prevRoutine.steps.filter(step => step.id !== id),
		}));
	};

    const handleSaveRoutine = (e) => {
		e.preventDefault();
		Api.saveRoutine(routine);
		if (onRoutineSave) {
			onRoutineSave(routine);
		}
	};
    
    return (
        <div className="container">
			<div className="row text-align-center align-items-center mb-5 font-console">
				<div className="col">
					<form onSubmit={handleSaveRoutine}>
						<div className="row mb-5">
                            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
                                <h3>Create a Routine</h3>

                                <div className="form-group mb-4">
                                    <label htmlFor="resultImageUrl" className="form-label">Result Image URL</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="resultImageUrl"
                                        name="resultImageUrl"
                                        placeholder="e.g https://placehold.co/1200x450"
                                        value={routine.resultImageUrl}
                                        onChange={handleRoutineChange}
                                        required
                                    />
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="name" className="form-label">Routine Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={routine.name}
                                        onChange={handleRoutineChange}
                                        required
										placeholder="e.g makeup for school"
                                    />
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="description" className="form-label">Short Description</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="description"
                                        name="description"
                                        max="255"
                                        value={routine.description}
                                        onChange={handleRoutineChange}
										placeholder="e.g keep your skin healty"
                                    />
                                </div>
                            </div>
						</div>

						<div className="row mb-5">
							<div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
								<h3 className="mb-3">Steps</h3>

								<div className="row">
									<div className="col-12">
										<ol>
											{routine.steps.map(step => (
												<li key={step.id}>
													<strong>{step.productName}</strong>
                                                    <p>{step.stepDescription}</p>
                                                    <strong>{step.imageUrl}</strong>
													<button type="button" className="btn btn-warning btn-sm mx-2" onClick={() => handleEditStep(step)}>Edit</button>
													<button type="button" className="btn btn-danger btn-sm" onClick={() => handleRemoveStep(step.id)}>Hapus</button>
												</li>
											))}
										</ol>
									</div>
								</div>

								<div className="form-group mb-4">
									<label htmlFor="productName" className="form-label">Product Name</label>
									<input
										type="text"
										className="form-control"
										id="productName"
										name="productName"
										placeholder="e.g Garnier"
										value={newStep.productName}
										onChange={handleStepChange}
									/>
								</div>

								<div className="form-group mb-4">
									<label htmlFor="imageUrl" className="form-label">Image URL</label>
									<input
										type="text"
										className="form-control"
										id="imageUrl"
										name="imageUrl"
										placeholder="e.g https://placehold.co/100x100/"
										value={newStep.imageUrl}
										onChange={handleStepChange}
									/>
								</div>

								<div className="form-group mb-4">
									<label htmlFor="stepDescription" className="form-label">Description</label>
									<textarea
										className="form-control"
										id="stepDescription"
										name="stepDescription"
										placeholder="Put the instructions here"
										value={newStep.stepDescription}
										onChange={handleStepChange}
									/>
								</div>

								<button type="button" className="btn button-primary-2" onClick={handleAddStep}>{isEditing ? 'Update Step' : 'Add Step'}</button>
							</div>
						</div>

                        <div className="row justify-items-center align-items-center">
                            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-5">
                                <button type="submit" className="btn button-primary-1 btn-lg">Save Routine</button>
                            </div>
                        </div>
					</form>
				</div>
			</div>
		</div>
    )
}

export default CreatePage;