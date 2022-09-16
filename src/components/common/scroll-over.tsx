import React from 'react';

export default function ScrollOver( statements : String[]){

    return(
        <>
        <div className="bg-image"></div>
        <div className="info">
            <div className="container">
                { statements.map((statement) => (
                    <div className="info-content">
                        <p> { statement } </p>
                    </div>
                )) }
            </div>
        </div>
    </>
    )
}
