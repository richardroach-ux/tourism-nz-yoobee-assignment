import React from "react";

function PopulateCard(cardDetail) {
// Returns a Card element, populated by an array contained in a separate document (Options.js)
    return <Card
        key={cardDetail.id}
        source={cardDetail.source}
        alt={cardDetail.alt}
        title={cardDetail.title}
        description={cardDetail.description}
        price={cardDetail.price}
    /> 

}
// Same format is used for all Card instances.
function Card(props) {
        return (
        <div className="card-wrapper interface-10">
        <img className="option-image" src={props.source} alt={props.alt}/>
        <h4 className="option-title">{props.title}</h4>
        <p className="option-description">{props.description}</p>
        <h3 className="option-price">${props.price}/night</h3>
        </div>
    )
        }


export default PopulateCard;
export {Card};