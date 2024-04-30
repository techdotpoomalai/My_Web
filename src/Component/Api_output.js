import React from 'react';

import './css/Api_outputStyle.css';

export default function Api_output(){
    return(
        <div className='restapi-output'>
            <div className='card-head-output'>
                <div className='output'>
                    <div className='btn btn-outline-secondary'>Json</div>
                    <div className='btn btn-outline-secondary'>Table</div>
                </div>
                <div className='output'>
                    <div className='btn btn-outline-secondary'>Status</div>
                    <div className='btn btn-outline-secondary'>Message</div>
                </div>
            </div>
            
            <div class="card card_restapi-output">
                <div class="card-body"><p>{"data:{}"}</p></div>
            </div>
            
        </div>
        
    );
}