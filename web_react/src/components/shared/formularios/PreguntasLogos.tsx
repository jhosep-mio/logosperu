import {
  type Dispatch,
  type SetStateAction
} from 'react'

export const PreguntasLogos = ({ seleccionPreguntas, setseleccionPreguntas }: { seleccionPreguntas: string, setseleccionPreguntas: Dispatch<SetStateAction<string>> }): JSX.Element => {
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
            <div className="box_general" >
              <h6 className="add_bottom_15 text-3xl">
                ¿Cuál de los planes de diseño Logotipo necesita su empresa?(
                <i>{'*'}</i> )
              </h6>
              <div className="form-group mt-6">
                <div className="qty-buttons">
                  <select
                    className="form-control cambiar_tamaño_Select"
                    name="preguntas"
                    id="planes_diseno_form"
                    value={seleccionPreguntas}
                    onChange={(e) => { setseleccionPreguntas(e.target.value) }}
                  >
                    <option value="">
                      Seleccione un plan
                    </option>
                    <option value="Plan Básico: 02 propuestas básicas (2 días hábiles)">
                      Plan Básico: 02 propuestas básicas (2 días hábiles)
                    </option>
                    <option value="Plan Creativo: 04 propuestas creativas (3 días hábiles)">
                      Plan Creativo: 04 propuestas creativas (3 días hábiles)
                    </option>
                    <option value="Plan Profesional: 05 propuestas únicas (5 días hábiles)">
                      Plan Profesional: 05 propuestas únicas (5 días hábiles)
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
