import { type Dispatch, type SetStateAction } from 'react'

export const Preguntasweb2 = ({
  seleccionPreguntas,
  setseleccionPreguntas
}: {
  seleccionPreguntas: string
  setseleccionPreguntas: Dispatch<SetStateAction<string>>
}): JSX.Element => {
  return (
    <div className="branch wizard-branch" id="budget">
      <div className="step wizard-step" data-state="end">
        <div className="question_title">
          <h3>RESPONDE ESTE PEQUEÑO CUESTIONARIO</h3>
          <p>Nos ayudará a darte una mejor asesoría</p>
          <p className="cambiar_color_naranja">
            Revise los campos antes de continuar al siguiente paso
          </p>
        </div>
        <div className="row justify-center flex formularioLogotipos">
          <div className="col-lg-8">
            <div className="box_general">
              <h6 className="add_bottom_15 text-3xl">
                ¿Cuenta con pagina web, o alguna web de referencia?, si es asi coloque su enlace (
                <i>{'*'}</i> )
              </h6>
              <div className="form-group mt-6">
                <div className="qty-buttons">
                  <input
                    type="text"
                    className="form-control cambiar_tamaño_Select"
                    name="preguntas"
                    id="planes_diseno_form"
                    value={seleccionPreguntas}
                    onChange={(e) => {
                      setseleccionPreguntas(e.target.value)
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
