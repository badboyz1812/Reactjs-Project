import React from 'react';
import { Link } from 'react-router-dom';

export function MenuBtn(){
    return(
        <div>
            <Link to ='/Menu'>
            <button type="button" className='btn btn-outline-success btn-lg'>Chef’s Creations</button>
            </Link>
        </div>
    )
}