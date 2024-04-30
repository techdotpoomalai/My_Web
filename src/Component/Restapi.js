import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './css/RestapiStyle.css';

import Api_input from './Api_input';
import Api_output from './Api_output';

export default function Restapi(){
    return(
        <div className='px-1'>
            <div className='card'>
                <h6 class="card-title p-2 card-title ">This page is Rest API demo left side you handle api input and right side you get output of API</h6>
                <div class="text-center p-2">
                    <div class="row">
                        <div class="col-4 py-3"> <Api_input/> </div>
                        <div class="col-8"><Api_output/></div>
                    </div>
                </div>
            </div>
        </div>
        

    );
}