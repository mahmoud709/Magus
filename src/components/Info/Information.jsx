import React from 'react'

export default function Information({ title, info }) {
  return (
    <div className="row info py-3 justify-content-center align-items-center">
        <div className="py-3">
          <h2 className='mainColor'>{title}</h2>
          <p className='w-75 fs-5 text-white'>{info}</p>
        </div>
      </div>
  )
}
