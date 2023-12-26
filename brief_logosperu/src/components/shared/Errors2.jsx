import React from 'react'

export const Errors2 = (props) => {
  return (
    <p className="text-3xl p-0 m-0 mt-3 pl-2 text-[#41469b] font-bold ">{props.errors !== null && props.errors !== undefined && props.errors !== '' &&
    props.touched !== null && props.touched !== undefined && props.touched &&  <span className="text-main">{props.errors}</span>}</p>

  )
}
