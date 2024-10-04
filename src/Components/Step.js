function Step({ step }) {
    const isValidImageURL = (url) => {
        try {
            const newUrl = new URL(url);
            const isValid = newUrl.protocol === 'http:' || newUrl.protocol === 'https:';

            if (isValid) {
                return url
            }
        } catch (err) {
            return ''
        }
    }

    const imageURL = isValidImageURL(step.imageUrl);
    
    return (
        <li className="mb-5">
            <h6 className="fw-semibold">{step.productName}</h6>
            <p className="font-console">{step.stepDescription}</p>
            {
                imageURL !== '' ? 
                <a href={imageURL} target="_blank">
                    <img src={imageURL} alt={step.stepDescription} className="img-fluid" />
                </a>
                :
                ''
            }
            
        </li>
    )
}

export default Step;