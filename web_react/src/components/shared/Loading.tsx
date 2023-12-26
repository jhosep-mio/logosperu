// import { icono} from './images'

const Loading = (): JSX.Element => {
  return (
    <div className="container_loading">
      <div className="cargando">
        <div className="pelotas"></div>
        <div className="pelotas"></div>
        <div className="pelotas"></div>
        <span className="texto-cargando">Cargando</span>
      </div>
    </div>
  )
}

export default Loading
