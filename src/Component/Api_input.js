import React from 'react';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import './css/Api_inputStyle.css';

export default function Api_input(){
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("hi");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='card-head-input'>
                <div className='btn btn-outline-secondary'>Text</div>
                <div className='btn btn-outline-secondary'>Json</div>
            </div>
            <div class="card card_restapi">
                <div class="card-body">
                    <div className='filed-style'>
                        <input type="text" className='input-style' name="filed1" value={inputs.username || ""} onChange={handleChange} />
                        <span className='add-icon px-2'><FontAwesomeIcon icon={faPlus} /></span>
                        <select name="" id="" className='input-type'>
                            <option value="text">Text</option>
                            <option value="number">Number</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='py-4 '>
                <input type="submit" class="btn btn-primary fw-bold" value="Create API"/>
            </div>
        </form>
    );    
}