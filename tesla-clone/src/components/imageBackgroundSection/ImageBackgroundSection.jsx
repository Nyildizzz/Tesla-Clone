import "./ImageBackgroundSection.css"


export default function ImageBackgroundSection({backgroundImage,header,description,featureItems =[]}){
    return(
        <div className="image-background" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="overlay">
                <div className="top-section">
                    <h2>{header}</h2>
                    <p>{description}</p>
                </div>
                <div className="bottom-section">
                    {featureItems.length > 0 && (
                        <ul className="feature-items">
                            {featureItems.map(({title,description}) => (
                                <li key={title}>
                                    <h3>{description}</h3>
                                    <p>{title}</p>
                                </li>
                            ))}

                        </ul>
                    )}
                      

                    <button>Order Now</button>
                    <button>Demo Drive</button>
                </div>
            </div>
        </div>
    )
}