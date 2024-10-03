function Step({ step }) {
    return (
        <li className="mb-5">
            <h6 className="fw-semibold">{step.productName}</h6>
            <p className="font-console">{step.stepDescription}</p>
            <a href={step.imageUrl} target="_blank">
                <img src={step.imageUrl} alt={step.stepDescription} className="img-fluid" />
            </a>
        </li>
    )
}

export default Step;