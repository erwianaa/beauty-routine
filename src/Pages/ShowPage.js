import Step from '../Components/Step';

function ShowPage({routine}) {
    const steps = routine.steps.map(step =>  <Step step={step}/>);
    const products = routine.steps.map(step => <li>{step.productName}</li>);

    return (
        <div className="bg-pattern">
            <div className="container container-bg">
                <div className="row justify-content-center align-items-center">
                    <img src={routine.resultImageUrl} alt="result image" className="img-fluid col-12 mb-4"/>
                </div>


                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 text-start mb-5">
                        <h1 className="fw-bold text-header-color-1">{routine.name}</h1>
                        <h3 className="fw-normal font-console">{routine.description}</h3>
                    </div>
                </div>


                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-8 order-sm-2 order-md-2 order-lg-1">
                        <div className="row">
                            <div className="col-12">
                                <h4 className="fw-bold">Steps</h4>
                            </div>

                            <div className="col-12">
                                <ol className="mt-3">
                                    {steps}
                                </ol>
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-12 col-md-12 col-lg-4 order-sm-1 order-md-1 order-lg-2 mb-5">
                        <div className="row align-items-end justify-content-end">
                            <div className="col-12">
                                <h4 className="fw-bold">Products</h4>
                                <ol className="font-console">
                                    {products}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowPage;