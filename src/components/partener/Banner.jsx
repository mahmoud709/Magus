import React from 'react';
import './Partners.css';
import { Link } from 'react-router-dom';
export default function Banner({title, textCon, btnCon,className ,height,route}) {
    return (
        <div className={` d-flex justify-content-center flex-column align-items-center ${className}`} style={{ height }}>
            <h2 className='text-uppercase my-3 text-white' >{title}</h2>
            {textCon ? <p className="article w-75 py-2 text-center text-white fs-5">{textCon}</p>:''}
            <Link to={route} className='mainBtn rounded'>
                {btnCon ? <button className='btn text-white px-3 fw-bold '>{btnCon}</button>:''}
            </Link>
        </div>
    )
}
