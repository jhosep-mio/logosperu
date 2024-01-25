interface Errores {
  errors: string | undefined
  touched: boolean | undefined
}

export const Errors3 = (props: Errores) => {
  return (
    <p className='absolute -bottom-7 left-0  text-xl p-0 m-0 mt-0 pl-2'>{props.errors !== null && props.errors !== undefined && props.errors !== '' &&
       props.touched !== null && props.touched !== undefined && props.touched && <span className='text-[red] text-center block'>{props.errors}</span>}
    </p>
  )
}
