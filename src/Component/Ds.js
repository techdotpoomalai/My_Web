import React from "react";

import './css/DsStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Ds(){
    return(

        <div className="containerds">
            <div className="hexagonArea first">
                <div className="hexagon">Regression problem</div>
                <div className="hexagon">Classification problem</div>
                <div className="hexagon">Clustering problem</div>
            </div>
            <div className="hexagonArea last">
                <div className="hexagon">Learning...</div>
                <div className="hexagon">Learning...</div>
            </div>
        </div>
    );
}