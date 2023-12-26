import React from 'react'

export const Errors = (props) => {
  return (
    <p className="text-3xl p-0 m-0 mt-3 pl-2 text-[#41469b] font-bold ">{props.error && <span className="text-main">{props.error.message}</span>}</p>
    // <p className="text-sm p-0 m-0">{props.error && <span className="text-main">Campo requerido</span>}</p>
  )
}
