import React from "react";

export default function cardComponent() {
    return(
        <>
            <div className="card" style={cardStyle}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div>
                        <div style={{display: 'inline'}}>
                            <select style={{width: "14%"}}>
                                {Array.from(Array(6), (e, index) => {
                                    return(
                                        <option key={index+1} value={index+1}>{index + 1}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div style={{display: 'inline', marginLeft: '5px'}}>
                            <select style={{width: "25%"}}>
                                <option selected>Half</option>
                                <option>Full</option>
                            </select>
                        </div>
                        <div style={{display: 'inline-flex', marginLeft: '5px'}}>
                            <h6>
                                Total Price
                            </h6>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

const cardStyle = {
    "width": "18rem", 
    "background": 'black', 
    'border-color': 'white'
}