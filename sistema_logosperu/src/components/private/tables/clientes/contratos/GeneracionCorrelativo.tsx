/* eslint-disable multiline-ternary */
import React, {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useState
} from 'react'
import { Link } from 'react-router-dom'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { type TransitionProps } from '@mui/material/transitions'
import axios from 'axios'
import { Global } from '../../../../../helper/Global'
import {
  type ValuesPlanes,
  type arrayContacto
} from '../../../../shared/schemas/Interfaces'
import { useFormik } from 'formik'
import { SchemaValidarVentas } from '../../../../shared/schemas/Schemas'
import { LoadingSmall } from '../../../../shared/LoadingSmall'
import { TitleBriefs } from '../../../../shared/TitleBriefs'
import { Errors } from '../../../../shared/Errors'
import { ModalContratos } from './ModalContratos'
import { Loading } from '../../../../shared/Loading'
import { toast } from 'sonner'

const Transition = React.forwardRef(function Transition (
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

interface valuesVentasTO {
  id: number
  nombres: string
  apellidos: string
  medio_ingreso: string
  nombre_empresa: string
  empresa: string
  plan: string
  id_contrato: string
  dni_ruc: string
  id_cliente: string
  nombre_cliente: string
  arraycontacto: string
}

interface valuesInterface {
  open: boolean
  datos: valuesVentasTO
  planes: ValuesPlanes[]
  setOpen: Dispatch<SetStateAction<boolean>>
}

export const GeneracionCorrelativo = ({
  open,
  datos,
  planes,
  setOpen
}: valuesInterface): JSX.Element => {
  const token = localStorage.getItem('token')
  const [loadingValidacion, seLoadingValidation] = useState(false)
  const [abrirPlan, setAbrirPlan] = useState(false)
  const [arrayContacto, setarrayConacto] = useState<arrayContacto[]>([])
  const [loading, setLoading] = useState(false)
  const [, setpersonContact] = useState<string | null>(null)
  const [, setDuplicateCode] = useState<boolean>(false)
  const limpiar = (): void => {
    resetForm()
  }
  const [pdfUrl, setPdfUrl] = useState<any | null>(null)

  const generarVenta = async (): Promise<void> => {}

  const handleClose = (): void => {
    setOpen(false)
    setPdfUrl(null)
    resetForm()
    setAbrirPlan(false)
  }
  const formatearContrato = (cadena: string): string => {
    const partes = cadena.split('_')
    return partes[0]
  }

  const generarCodigo = async (plan: string): Promise<void> => {
    seLoadingValidation(true)
    setDuplicateCode(false)
    try {
      const data = new FormData()
      data.append('plan', plan)
      const request = await axios.post(
        `${Global.url}/generarCodigoToContrato`,
        data,
        {
          headers: {
            Authorization: `Bearer ${
              token !== null && token !== '' ? token : ''
            }`
          }
        }
      )

      if (request.data.status == 'success') {
        let descripcionEntrada = ''
        if (formatearContrato(request.data.codigo) == 'LP69') {
          descripcionEntrada =
            '<p><strong style="background-color: yellow;">DISEÑO DE 01 LOGO:</strong></p><ul><li>Brief o Cuestionario de la empresa. (<strong>BRIEF SISTEMA)</strong></li><li><strong>Hasta (01) de Propuestas de diseño de LOGO</strong></li><li><strong>Análisis el Brief para la construcción del Logotipo.</strong></li><li><strong>Diseño o Rediseño de Logo</strong></li><li><strong>Coordinación directa, con el cliente para el desarrollo del Brief o cuestionario.</strong></li></ul><p>Propuestas:</p><ul><li>Recibirás (01 propuestas) Profesionales</li><li>100 % originales</li><li>1 diseñador dedicado</li><li>Modificaciones (03 cambios en el diseño aprobado). No se otorgarán más cambios según el plan contratado. Entrega del Logotipo (02 días Hábiles.</li><li>Teniendo en cuenta la respuesta inmediata del cliente. Entregables del Logotipo Final: Archivos Editables y sustentación del LOGOTIPO APROBADO: Ilustrador o PSD – PNG – JPG –PDF</li></ul>'
        } else if (formatearContrato(request.data.codigo).includes('LP69')) {
          descripcionEntrada =
            '<p class="ql-align-justify"><strong>DISEÑO DE&nbsp;</strong><strong style="background-color: yellow;">01 LOGO</strong><strong style="color: red;">:&nbsp;</strong><strong>&nbsp;</strong></p><ul><li class="ql-align-justify"><strong>Brief o Cuestionario de la empresa.&nbsp;</strong><span style="background-color: yellow;">(Se realizará un Análisis previo antes de la construcción del Logotipo)</span></li><li class="ql-align-justify"><strong>Hasta&nbsp;</strong><strong style="background-color: yellow;">(01)</strong><strong>&nbsp;de Propuestas de diseño de LOGO&nbsp;</strong></li><li class="ql-align-justify"><strong>Análisis el Brief para la&nbsp;construcción del Logotipo.</strong></li><li class="ql-align-justify"><strong>Diseño o Rediseño de Logo</strong></li></ul><p class="ql-align-justify">•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coordinación directa, con el cliente para el desarrollo del Brief o cuestionario.</p><p class="ql-align-justify"><strong style="background-color: yellow;">Propuestas:</strong></p><ul><li class="ql-align-justify">Recibirás (01 propuestas) Profesionales</li><li class="ql-align-justify">100 % originales</li><li class="ql-align-justify">1 diseñador dedicado</li><li class="ql-align-justify">Modificaciones (<strong style="color: red;">03 cambios en el diseño aprobado</strong>).&nbsp;<strong><u>No se otorgarán más cambios según el plan contratado.</u></strong></li></ul><p class="ql-align-justify">Entrega del Logotipo (<strong>02 días</strong>&nbsp;Hábiles. Teniendo en cuenta la respuesta inmediata del cliente.</p><p class="ql-align-justify">Entregables del Logotipo Final: Archivos Editables y&nbsp;<strong>sustentación del LOGOTIPO APROBADO</strong>:&nbsp;<strong>Ilustrador o PSD – PNG – JPG –PDF</strong></p><p class="ql-align-justify"><br></p><p class="ql-align-justify"><strong style="background-color: yellow;">No incluye adaptación de personaje, ni&nbsp;vectorización.</strong></p><p class="ql-align-justify"><br></p><ul><li class="ql-align-justify">Identidad Visual :</li><li class="ql-align-justify">01 diseño de Hoja Membretada - 1 propuesta</li><li class="ql-align-justify">Hasta dos cambios</li></ul>'
        } else if (formatearContrato(request.data.codigo) == 'LPEXC') {
          descripcionEntrada =
            '<p>DISEÑO DE 01 LOGO :</p><ul><li>Brief o Cuestionario de la empresa. (<strong>BRIEF - SISTEMA)&nbsp;&nbsp;</strong></li><li><strong style="background-color: yellow;">Hasta (02) de Propuestas de diseño de LOGO</strong></li><li><strong style="background-color: yellow;">Análisis el Brief para la construcción del Logotipo.</strong></li><li><strong>Diseño de Logo – Plan Excepcional</strong></li><li><strong style="background-color: yellow;">Coordinación directa, con el cliente para el desarrollo del Brief o cuestionario.</strong></li></ul><p>Propuestas:</p><ul><li>Recibirás (02 propuestas) Profesionales</li><li>100 % originales</li><li>1 diseñador dedicado</li><li>Modificaciones (03 cambios en el diseño aprobado).</li><li>No se otorgarán más cambios según el plan contratado. Entrega del Logotipo (02 días Hábiles. Teniendo en cuenta la respuesta inmediata del cliente.</li><li>Entregables del Logotipo Final: Archivos Editables y sustentación del LOGOTIPO APROBADO: Ilustrador o PSD – PNG – JPG –PDF</li></ul><p>&nbsp;</p><p>No incluye adaptación de personaje, ni vectorización</p><p>&nbsp;</p><p>Identidad Visual – 1 propuesta de cada uno</p><ul><li>01 Diseño de tarjeta de presentación</li><li>01 Diseño de Hoja Membretada</li><li>01 Diseño de firma de correo</li><li>01 Diseño de flyer o post</li><li> Hasta 2 cambios</li></ul>'
        } else if (formatearContrato(request.data.codigo).includes('LPEXC')) {
          descripcionEntrada =
              '<p>DISEÑO DE 01 LOGO :</p><ul><li>Brief o Cuestionario de la empresa. (<strong>BRIEF - SISTEMA)&nbsp;&nbsp;</strong></li><li><strong>Hasta (02) de Propuestas de diseño de LOGO</strong></li><li><strong>Análisis el Brief para la construcción del Logotipo.</strong></li><li><strong>Diseño de Logo – Plan Excepcional</strong></li><li><strong>Coordinación directa, con el cliente para el desarrollo del Brief o cuestionario.</strong></li></ul><p><br></p><p>Propuestas:</p><ul><li>Recibirás (02 propuestas) Profesionales</li><li>100 % originales</li><li>1 diseñador dedicado</li><li>Modificaciones (03 cambios en el diseño aprobado).</li><li>No se otorgarán más cambios según el plan contratado. Entrega del Logotipo (02 días Hábiles. Teniendo en cuenta la respuesta inmediata del cliente.</li><li>Entregables del Logotipo Final: Archivos Editables y sustentación del LOGOTIPO APROBADO: Ilustrador o PSD – PNG – JPG –PDF</li></ul><p>&nbsp;</p><p>No incluye adaptación de personaje, ni vectorización</p><p>&nbsp;</p><ul><li>Identidad Visual – 1 propuesta de cada uno</li><li>01 Diseño de Hoja Membretada</li><li>Hasta 2 cambios</li></ul>'
        } else if (formatearContrato(request.data.codigo) == ('LPPG')) {
          descripcionEntrada =
            '<p><strong>DISEÑO DE PIEZAS GRAFICAS (1 propuesta)</strong></p><ul><li><strong>01 banner para impresión de 0.7 x 2.00 mts – 1 propuesta</strong></li><li><strong>Hasta 3 cambios ENTREGABLES :</strong></li><li><strong>EDITABLES - jpg – png – pdf</strong></li></ul><p><strong>&nbsp;</strong></p><p><strong>El cliente nos remite</strong></p><ul><li><strong>Coordinación directa con el diseñador</strong></li><li><strong>Logo en versión editable</strong></li></ul>'
        } else if (formatearContrato(request.data.codigo) == ('LPCME')) {
          descripcionEntrada =
            '<p>PLAN EMPRENDEDOR</p><p>✓ Análisis&nbsp;de Marketing Digital</p><p>✓ 01 PUBLICACIÓN POR SEMANA (LUNES A SABADO)&nbsp;</p><p>&nbsp;&nbsp;Descripción y post&nbsp;</p><p>✓ DISEÑO DE FLYER O POST - Entregable cronograma&nbsp;</p><p>✓ 01 DISEÑO DE PORTADA facebook - wsp bussines x mes&nbsp;</p><p>✓ Asesoría en creación de redes (facebook - Instagram)&nbsp;</p><p>✓ CONTRATO MINIMO X 3 MESES</p>'
        } else if (formatearContrato(request.data.codigo) == ('LPCMC')) {
          descripcionEntrada =
              '<p>&nbsp;PLAN COBRE&nbsp;</p><p>✓ Investigación digital</p><p>✓ Análisis&nbsp;de Marketing Digital - DOCUMENTACIÓN - Linea Gráfica&nbsp;&nbsp;</p><p>✓ 03 PUBLICACIONES POR SEMANA (LUNES A SABADO)&nbsp;</p><p>&nbsp;&nbsp;Descripción y post&nbsp;</p><p>✓ DISEÑO DE FLYER O POST - Entregable cronograma&nbsp;</p><p>✓ 01 DISEÑO DE PERFIL (facebook - Instagram)</p><p>✓ 01 DISEÑO DE PORTADA facebook - wsp bussines&nbsp;</p><p>✓ Asesoría en creación de redes (facebook - Instagram)&nbsp;</p><p>✓ CONTRATO MINIMO X 3 MESES</p>'
        } else if (formatearContrato(request.data.codigo) == ('LPCMS')) {
          descripcionEntrada =
                '<p>PLAN SILVER&nbsp;</p><p>✓ Investigación digital</p><p>✓ Análisis&nbsp;de Marketing Digital - DOCUMENTACIÓN - Linea Gráfica&nbsp;&nbsp;</p><p>✓ 05 PUBLICACIONES POR SEMANA (LUNES A SABADO)</p><p>&nbsp;&nbsp;Descripción y post&nbsp;</p><p>✓ DISEÑO DE FLYER O POST - Entregable cronograma&nbsp;</p><p>✓ RESPUESTAS O COMENTARIOS a Potenciales (clientes o seguidores)&nbsp;</p><p>✓ 01 DISEÑO DE PERFIL (facebook - Instagram - Tiktok)&nbsp;</p><p>✓ 01 DISEÑO DE PORTADA para facebook - wsp bussines&nbsp;</p><p>✓ 01 DESARROLLO DE REEL max 10 segundos (dentro del mes)&nbsp;</p><p>✓ Indexación de fan page al wsp Bussines&nbsp;</p><p>✓ Desarrollo de respuestas automaticas - Fan Page&nbsp;</p><p>✓ Asesoría en creación de redes (facebook - Instagram - Tiktok)&nbsp;</p><p>✓ Reporte de metricas&nbsp;- Quincenal&nbsp;</p><p>✓ CONTRATO MINIMO X 3 MESES</p>'
        } else if (formatearContrato(request.data.codigo) == ('LPCMG')) {
          descripcionEntrada =
                  '<p>PLAN GOLDEN</p><p>✓ Investigación digital</p><p>✓ Análisis&nbsp;de Marketing Digital - DOCUMENTACIÓN&nbsp;- Linea Gráfica&nbsp;</p><p>✓ 08 PUBLICACIÓN POR SEMANA&nbsp;(LUNES A SABADO)&nbsp;</p><p>&nbsp;&nbsp;Descripción y post&nbsp;&nbsp;</p><p>✓ DISEÑO DE FLYER O POST -&nbsp;Incluye (Retoque Fotográfico) - Entregable cronograma&nbsp;</p><p>✓ RESPUESTAS O COMENTARIOS a Potenciales (clientes o seguidores)&nbsp;</p><p>✓ 01 DISEÑO DE PERFIL (facebook - Instagram - Tiktok)&nbsp;</p><p>✓ 01 DISEÑO DE PORTADA para facebook - wsp bussines&nbsp;</p><p>✓ 02 DESARROLLO DE REEL max 20 segundos (dentro del mes)&nbsp;efectos y musicalización&nbsp;</p><p>✓ Indexación de fan page al wsp Bussines&nbsp;</p><p>✓ Desarrollo de respuestas automaticas - Fan Page&nbsp;</p><p>✓ DESARROLLO DE CAMPAÑAS INTERACTIVAS - WEB - REDES&nbsp;</p><p>✓ CAPACITACIÓN DE CAMPAÑA PAGADA - (facebook - Instagram) ADS</p><p>&nbsp;&nbsp;Incluye documentación e interacción con la red social , Listo para pagar</p><p>&nbsp;&nbsp;IMPORTANTE : Inversión de publicidad pagada esta cargo del cliente&nbsp;&nbsp;</p><p>✓ Asesoría en creación de redes (facebook - Instagram - Tiktok)&nbsp;</p><p>✓ Reporte de metricas&nbsp;- Quincenal (metricool)&nbsp;</p><p>✓ CONTRATO MINIMO X 3 MESES</p>'
        } else if (formatearContrato(request.data.codigo) == ('LPBRO6')) {
          descripcionEntrada =
            '<p><strong style="background-color: yellow;">01 Diseño de Brochure:</strong></p><ul><li>Información requerida (imágenes, datos de contacto, fotos propias)</li><li>Envió deL Brochure editable. (Se realizará un Análisis previo antes de la construcción del Brochure)</li><li>Hasta (01) Propuesta de Brochure de&nbsp;<strong>06 CARAS – 03 hojas</strong></li><li><strong>Análisis de la información enviada para la construcción del Brochure.</strong></li><li><strong>Coordinación directa, con el cliente para el desarrollo del Brief o cuestionario.</strong></li></ul><p><br></p><p>Propuestas:</p><ul><li>Recibirás (01 Desarrollo &amp; Diseños de Brochure Digital-impresión) Profesional.&nbsp;<strong>06 CARAS&nbsp;- 3 hojas&nbsp;</strong>&nbsp;</li><li>100 % originales</li><li>1 diseñador dedicado</li><li>Modificaciones (02 cambios en el diseño aprobado). No se otorgarán más cambios según el plan contratado.</li></ul><p><br></p><p>Entrega del Brochure (02 días hábiles) según la respuesta inmediata del cliente</p><p class="ql-align-justify">Entregables de Brochure Final: Archivos Editables: Ilustrador o PSD // JPG imagen</p>'
        } else if (formatearContrato(request.data.codigo) == ('LPBRO4')) {
          descripcionEntrada =
              '<p><strong style="background-color: yellow;">01 Diseño de Brochure:</strong></p><ul><li>Información requerida (imágenes, datos de contacto, fotos propias)</li><li>Envió de brochure editable. (Se realizará un Análisis previo antes de la construcción del Brochure)</li><li>Hasta (01) Propuesta de Brochure de&nbsp;<strong>04 CARAS – 02 hojas</strong></li><li><strong>Análisis de la información enviada para la construcción del Brochure.</strong></li><li><strong>Coordinación directa, con el cliente para el desarrollo del Brief o cuestionario.</strong></li></ul><p><br></p><p>Propuestas:</p><ul><li>Recibirás (01 Desarrollo &amp; Diseños de Brochure Digital-impresión) Profesional.&nbsp;<strong>04 CARAS&nbsp;- 2 hojas&nbsp;</strong>&nbsp;</li><li>100 % originales</li><li>1 diseñador dedicado</li><li>Modificaciones (02 cambios en el diseño aprobado). No se otorgarán más cambios según el plan contratado.</li></ul><p><br></p><p>Entrega del Brochure (02 días hábiles) según la respuesta inmediata del cliente</p><p class="ql-align-justify">Entregables de Brochure Final: Archivos Editables: Ilustrador o PSD // JPG imagen</p>'
        } else if (formatearContrato(request.data.codigo) == ('LPBRO8')) {
          descripcionEntrada =
                '<p><strong style="background-color: yellow;">01 Diseño de Brochure:</strong></p><ul><li>Información requerida (imágenes, datos de contacto, fotos propias)</li><li>Envió de brochure editable. (Se realizará un Análisis previo antes de la construcción del Brochure)</li><li>Hasta (01) Propuesta de Brochure de&nbsp;<strong>08 CARAS – 04 hojas</strong></li><li><strong>Análisis de la información enviada para la construcción del Brochure.</strong></li><li><strong>Coordinación directa, con el cliente para el desarrollo del Brief o cuestionario.</strong></li></ul><p><br></p><p>Propuestas:</p><ul><li>Recibirás (01 Desarrollo &amp; Diseños de Brochure Digital-impresión) Profesional.&nbsp;<strong>08 CARAS&nbsp;- 4 hojas&nbsp;</strong>&nbsp;</li><li>100 % originales</li><li>1 diseñador dedicado</li><li>Modificaciones (02 cambios en el diseño aprobado). No se otorgarán más cambios según el plan contratado.</li></ul><p><br></p><p>Entrega del Brochure (02 días hábiles) según la respuesta inmediata del cliente</p><p class="ql-align-justify">Entregables de Brochure Final: Archivos Editables: Ilustrador o PSD // JPG imagen</p>'
        } else if (formatearContrato(request.data.codigo) == ('LPTV')) {
          descripcionEntrada =
              '<p>DESARROLLO DE TIENDA VIRTUAL :</p><p>&nbsp;</p><ul><li>Hasta 5 internas. Bajo Plantillas Pre determinadas (El cliente escoge una)</li><li>Desarrollamos un Brief A MEDIDA Integración de Carrito de COMPRAS.</li><li>EL COSTO POR LA INTEGRACIÓN DEL SERVICIO DE COMERCIO ELECTRÓNICO, ES ASUMIDO POR EL CLIENTE</li><li>Pasarela de Pago: Mercado Pago:</li><li>Medio de pago: Tarjetas de crédito</li><li class="ql-indent-1">Visa, Mastercard, American express y Diners Club.</li><li class="ql-indent-1">Registro de pagos en el sistema de mercado pago y en el sistema de la tienda virtual.</li><li>Trabajamos nuestra programación y Maquetación desde CERO Programación en PHP</li><li class="ql-indent-1">Framework Base de Datos Myql</li><li>Soporte hasta 100 productos</li><li>Administración Dominio .com GRATIS x un AÑO</li><li>Alojamiento Web 03 GB (Sin Cpanel Independiente) GRATIS x un AÑO</li><li>NO Utilizamos plantillas o CMS Gratuitos de Internet WEB desarrollada desde CERO</li><li>Formularios de Contacto Dinámico.</li><li>MAIL de repuesta al visitante.</li><li>Ubicación de la empresa o negocio a través de Google Maps.</li><li>Seguridad Anti Spam Interacción con Redes Sociales.</li><li>Podrá ADMINISTRAR Hasta 02 Internas.</li><li>Creación de hasta 05 Correos Corporativos (Asesoría en su configuración)</li><li>Entrega de acceso al administrador. Manual de Usuario.</li><li>Capacitación del sistema (vía VIRTUAL). Soporte Técnico.</li><li>Por 03 mes (Solo atendemos incidencias o fallas en nuestro servicio + (01) cambio textuales e imágenes).</li><li>Técnica de Posicionamiento Web (SEO).</li><li>Retoque Fotográfico de Hasta 15</li></ul><p>&nbsp;</p><p><strong>EL CLIENTE NOS REMITE:</strong></p><ul><li>Su logotipo editable (PSD – Ai – CDR).</li><li>Fotos e imágenes en buena resolución.</li><li>Entrega de datos de contacto</li></ul>'
        } else if (formatearContrato(request.data.codigo) == ('LPREEL')) {
          descripcionEntrada =
                '<p><strong>EDICION DE VIDEO</strong></p><ul><li>01 Desarrollo de Reel o Edición de Video de hasta 10 SEGUNDOS Saludo o presentación de su empresa o negocio</li><li>Cliente nos remite Logo en versión editable, Fotos o Videos Cortos, Logos Perú Edita</li><li>Incluye Efectos y Musicalización</li><li>Desarrollo StoryBoard : Presentación al cliente</li><li><strong style="background-color: yellow;">Locución en Off –</strong><strong>&nbsp;no incluye</strong></li><li>Entregable vía DRIVE</li><li>Tiempo de producción (total): 02 días hábiles Propuestas:</li><li class="ql-indent-2">Recibirás un desarrollo y edición de su video</li><li class="ql-indent-2">100 % originales</li><li class="ql-indent-2">1 profesional dedicado</li><li class="ql-indent-2">Resolución 1920x1080, alta calidad.</li><li class="ql-indent-2">Modificaciones (02 cambios) por Video. No se otorgarán más cambios según el plan contratado.</li></ul><p>&nbsp;</p><p>Entrega del Video en Drive (Descargar)</p>'
        } else if (formatearContrato(request.data.codigo) == ('LPFLYER')) {
          descripcionEntrada =
                  '<p><strong>SERVICIO de diseño de piezas graficas</strong></p><p><strong>&nbsp;</strong></p><ul><li><strong>03 Diseños de flyer – 01 propuestas – 1 cara Según requerimientos y ejemplos del cliente</strong></li><li><strong>Hasta dos cambios x cada flyer</strong></li><li><strong>ENTREGABLES : JPG – PDF - AI para impresión</strong></li></ul><p>&nbsp;</p><p>El cliente nos remite :</p><ul><li>Coordinación directa con el diseñador</li><li>Logo en versión editable</li></ul>'
        } else if (formatearContrato(request.data.codigo) == ('LPSEO')) {
          descripcionEntrada =
                    '<p><strong style="color: red;">1.-Propiedad Verificada:</strong></p><p>- Verificación desde Gmail y añadir DNS</p><p>- Verificar Google console search y listo la propiedad es del cliente</p><p>- Realizar solicitud de indexación para que la URL pueda aparecer</p><p>en Google</p><p>Propiedad Verificada</p><p><strong style="color: red;">2.-SEO:</strong></p><p>- Uso de Metadatos para mejorar el posicionamiento del SEO y</p><p>también el rendimiento del SEO con la propiedad del cliente cual</p><p>favorecerá a la carga de la página.</p><p>Cliente remite palabras claves </p><p>Capacitación y documentación&nbsp;</p>'
        } else if (formatearContrato(request.data.codigo) == ('LPADS')) {
          descripcionEntrada =
                      '<p>1.- Servicio de <strong style="background-color: yellow;">Asesoría de Posicionamiento PAGADO en GOOGLE - Adwords</strong></p><ul><li>Capacitación a distancia - Bajo el medio digital que se acuerde</li><li>Análisis de la web a posicionar</li><li>Recomendaciones</li><li>Configuración de la Cuenta</li><li>Capacitación de Uso de Google SEM</li><li>Manuales de Uso</li><li>Tiempo de Capacitación: Max 3 horas</li><li>Estrategias de pago</li><li>Capacitación en la publicidad pagada por el mismo cliente</li><li>Entrega de Manuales y Material – link grabado </li><li>TIEMPO: 01 día hábil</li></ul>'
        } else if (formatearContrato(request.data.codigo) == ('LPWA')) {
          descripcionEntrada =
                        '<p>DESARROLLO &amp; DISEÑO WEB ADMINISTRABLE - PLAN  :</p><p>&nbsp;</p><p>✓ Hasta 6 internas, A la medida del cliente. CLIENTE NOS REMITE SU EJEMPLO</p><p>✓ Desarrollamos un Brief A MEDIDA</p><p>✓ Formularios de Contacto Dinámico. MAIL de repuesta al visitante.</p><p>✓ Ubicación de la empresa o negocio a través de Google Maps.</p><p>✓ Programación en PHP - Framework Codeigter</p><p>✓ Base de Datos Myql</p><p>✓ HTML 5 , Booystrap, CSS3, jQUERY</p><p>✓ No usamos plantillas - No trabajamos con CMS</p><p>✓ Seguridad Anti Spam</p><p>✓ Administración Dominio .com <strong style="background-color: yellow;">GRATIS x un AÑO</strong></p><p>✓ Alojamiento Web ilimitado (Cpanel Independiente) <strong style="background-color: yellow;">GRATIS x un AÑO</strong></p><p>✓ Interacción con Redes Sociales. Facebook - Whastapp - INSTAGRAM</p><p>✓ Podrá ADMINISTRAR Hasta 03 Internas. NOTICIAS - PRODUCTOS – SERVICIOS</p><p>✓ Entrega de acceso al administrador.</p><p>✓ Manual de Usuario.</p><p>✓ Capacitación del sistema (En nuestra Agencia o VIRTUAL).</p><p>✓ Soporte Técnico. Por 03 mes (Solo atendemos incidencias o fallas en nuestro servicio + (01) cambio textuales e imágenes).</p><p>✓ Retoque Fotográfico de Hasta 15</p><p>&nbsp;</p><p>• EL CLIENTE NOS REMITE :</p><p>• Su logotipo editable (PSD – Ai – CDR).</p><p>• Fotos e imágenes en buena resolución.</p><p>• Entrega de datos de contacto</p>'
        } else if (formatearContrato(request.data.codigo) == ('LPW')) {
          descripcionEntrada =
                          '<p>01 DISEÑO WEB INFORMATIVA: </p><ul><li>Hasta 4 internas, bajo nuestras propuestas INGRESAR (Plantillas Express) el cliente elegirá una </li><li>Desarrollamos un Brief </li><li>Formularios de Contacto Dinámico. MAIL de repuesta al visitante. </li><li>Ubicación de la empresa o negocio a través de Google Maps. </li><li>NO Utilizamos plantillas o CMS Gratuitos de Internet </li><li>WEB desarrollada desde CERO </li><li>Seguridad Anti Spam </li><li>Interacción con Redes Sociales. (WhatsApp – Facebook – YouTube) </li><li>Administración Dominio .com <strong style="background-color: yellow;">GRATIS x un AÑO</strong></li><li>Alojamiento Web 1 GB (Sin Cpanel Independiente) <strong>GRATIS x un AÑO</strong></li><li>Soporte Técnico. Por 01 mes (Solo atendemos incidencias o fallas en nuestro servicio). </li></ul><p>&nbsp;</p><p>EL CLIENTE NOS REMITE: </p><p>&nbsp;</p><ul><li>Entrega de textos e imágenes para la página web </li><li>Logotipo en versión editable </li><li>Fotos e imágenes en buena resolución. </li><li>Datos de contacto</li></ul>'
        } else if (formatearContrato(request.data.codigo) == ('LPMAPS')) {
          descripcionEntrada =
                            '<p><strong style="color: red;">1.-Propiedad Verificada:</strong></p><p>- Verificación desde Gmail y añadir DNS</p><p>- Verificar Google console search y listo la propiedad es del cliente</p><p>- Realizar solicitud de indexación para que la URL pueda aparecer</p><p>en Google</p><p><br></p><p><strong style="color: red;">2. Ubicación del negocio en google maps</strong></p><p><strong style="color: red;">&nbsp;</strong></p><p><strong style="color: red;">CLIENTE NOS RENITE : SUS ACCESOS A SU CUENTA GMAIL&nbsp;</strong></p>'
        } else if (formatearContrato(request.data.codigo) == ('LPHOST')) {
          descripcionEntrada =
                              '<p><strong>Plan COBRE:</strong></p><p><strong>&#xFEFF;</strong></p><p>✓ Administracion de dominio .com .pe</p><p>✓ Alojamiento solo para correos</p><p>✓ Sin Cpanel Independiente</p><p>✓ Creación hasta 04 correos</p><p>✓ Manual de Configuración GMAIL - Outlokk</p><p>✓Pago ANUAL</p><p>✓ Trabajamos bajo contrato</p><p><br></p><p>Tiempo de entrega 48 - 72 Horas</p>'
        }
        setValues({
          ...values,
          id_contrato: request.data.codigo,
          descripcion: descripcionEntrada
        })
      } else {
        toast.error('Error al generar correlativo')
      }
    } catch (error) {
      console.log(error)
      toast.error('Error al generar correlativo')
    }
    seLoadingValidation(false)
  }

  const {
    handleSubmit,
    handleChange,
    setValues,
    resetForm,
    errors,
    values,
    touched,
    handleBlur
  } = useFormik({
    initialValues: {
      id: 0,
      medio_ingreso: '',
      nombre_empresa: '',
      plan: '',
      id_contrato: '',
      dni_ruc: '',
      id_cliente: '',
      nombre_cliente: '',
      descripcion: ''
    },
    validationSchema: SchemaValidarVentas,
    onSubmit: generarVenta
  })

  useEffect(() => {
    console.log(datos)
    setValues({
      ...values,
      id: datos?.id,
      medio_ingreso: datos?.medio_ingreso,
      nombre_empresa: datos?.nombre_empresa,
      plan: datos?.plan,
      id_contrato: datos?.id_contrato,
      dni_ruc: datos?.dni_ruc,
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      nombre_cliente: datos?.nombre_cliente,
      id_cliente: datos?.id_cliente,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      descripcion: datos?.descripcion ?? '',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      precio: datos?.precio ?? ''
    })
    setarrayConacto(
      datos?.arraycontacto ? JSON.parse(datos?.arraycontacto) : []
    )
  }, [open])

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        scroll='body'
        maxWidth={pdfUrl ? 'xl' : 'md'}
        aria-describedby="alert-dialog-slide-description"
        className="w-screen p-0 m-0 modal_dialog_correlativo"
      >
        <section
          className={`grid ${pdfUrl ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}  `}
        >
          {values.id_contrato ? (
            <ModalContratos
              datos={values}
              setPdfUrl={setPdfUrl}
              pdfUrl={pdfUrl}
              setLoading={setLoading}
              loading={loading}
            />
          ) : (
            <div className="w-full">
              <DialogTitle className="text-center">
                {'CREAR CONTRATO'}
              </DialogTitle>
              <DialogContent className="w-full md:w-96 max-h-[500px] p-0">
                <DialogContentText
                  id="alert-dialog-slide-description"
                  className="w-full p-0 m-0"
                >
                  {loadingValidacion ? (
                    <LoadingSmall />
                  ) : (
                    <form
                      className="flex flex-col gap-5 w-full"
                      onSubmit={handleSubmit}
                    >
                      {!abrirPlan ? (
                        <>
                          <div className="w-full  lg:relative pt-5">
                            <TitleBriefs titulo=" Nombres/Empresa" />
                            <select
                              className="border placeholder-gray-400 max-w-full focus:outline-none overflow-hidden
                                                focus:border-black w-full pr-4 h-12 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                                                border-gray-300 rounded-md transition-all outline-none"
                              name="nombre_empresa"
                              value={values.nombre_empresa}
                              onChange={(e) => {
                                if (arrayContacto && arrayContacto.length > 0) {
                                  const selectedContact = arrayContacto.find(
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-expect-error
                                    (contacto: ListcontactoClientes) =>
                                      contacto.nombres === e.target.value
                                  )
                                  setpersonContact(
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-expect-error
                                    selectedContact ? selectedContact.id : null
                                  )
                                }
                                handleChange(e)
                              }}
                              onBlur={handleBlur}
                              disabled={false}
                            >
                              <option value="">----SELECCIONAR ----</option>
                              {values?.nombre_empresa && (
                                <option value={values?.nombre_empresa}>
                                  {values?.nombre_empresa}
                                </option>
                              )}
                              {values?.nombre_cliente && (
                                <option value={values?.nombre_cliente}>
                                  {values?.nombre_cliente}
                                </option>
                              )}
                              {arrayContacto &&
                                arrayContacto.length > 0 &&
                                arrayContacto.map(
                                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                  // @ts-expect-error
                                  (contacto: ListcontactoClientes) => (
                                    <option
                                      value={contacto.nombres}
                                      key={contacto.id}
                                    >
                                      {contacto.nombres} - {contacto.marca}
                                    </option>
                                  )
                                )}
                            </select>
                            <Errors
                              errors={errors.nombre_empresa}
                              touched={touched.nombre_empresa}
                            />
                          </div>
                          <div className="w-full  lg:relative mt-2">
                            <TitleBriefs titulo="Medio de ingreso" />
                            <select
                              className="border placeholder-gray-400 focus:outline-none
                                                                                focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                                                                                border-gray-300 rounded-md transition-all"
                              name="medio_ingreso"
                              value={values.medio_ingreso}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            >
                              {/* FB GOOGLE, VENTAS, POST VENTA, RECOMENDACION, ISNTAGRAM) */}
                              <option value="">Seleccionar</option>
                              <option value="0">Facebook</option>
                              <option value="4">Whatsapp</option>
                              <option value="1">Google</option>
                              <option value="5">Instagram</option>
                              {/* <option value="2">Ventas</option> */}
                              <option value="3">Post Venta</option>
                              <option value="6">Recomendación</option>
                              <option value="7">Logos</option>
                            </select>
                            <Errors
                              errors={errors.medio_ingreso}
                              touched={touched.medio_ingreso}
                            />
                          </div>
                          <div className="w-full  lg:relative mt-2">
                            <TitleBriefs titulo=" DNI/RUC (Opcional)" />
                            <input
                              className="border placeholder-gray-400 focus:outline-none
                                                focus:border-black w-full pr-4 h-12 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                                                border-gray-300 rounded-md transition-all"
                              name="dni_ruc"
                              type="text"
                              value={values.dni_ruc}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              disabled={false}
                            />
                            <Errors
                              errors={errors.dni_ruc}
                              touched={touched.dni_ruc}
                            />
                          </div>
                          <div className="w-full  lg:relative mt-2">
                            <TitleBriefs titulo="Plan" />
                            <button
                              className="border placeholder-gray-400 focus:outline-none
                                                                                focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                                                                                border-gray-300 rounded-md transition-all"
                              onClick={() => {
                                if (
                                  values.medio_ingreso &&
                                  values.nombre_empresa &&
                                  values.dni_ruc
                                ) {
                                  setAbrirPlan(true)
                                } else {
                                  toast.warning('Complete todos los datos')
                                }
                              }}
                            >
                              {values.plan ? values.plan : 'Seleccionar'}
                            </button>
                            {/* <Errors errors={errors.plan} touched={touched.plan} /> */}
                          </div>
                        </>
                      ) : (
                        <div className="w-full lg:relative mt-2 ">
                          <TitleBriefs titulo="Seleecionar plan" />
                          <div className="grid grid-cols-1 md:grid-cols-1 gap-2 items-center mb-0 p-4 cursor-pointer">
                            {planes.map((plan) => (
                              <p
                                key={plan.id}
                                className="line-clamp-2 text-black text-center w-full border-2 py-1 rounded-xl"
                                onClick={() => {
                                  generarCodigo(plan.codigo)
                                }}
                              >
                                {plan.nombre}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                      <div className="flex w-full justify-end gap-3 rounded-md text-black ">
                        <Link
                          to="#"
                          className="bg-red-600 px-3 py-2 rounded-md text-white cursor-pointer"
                          onClick={() => {
                            handleClose()
                            limpiar()
                            setAbrirPlan(false)
                          }}
                        >
                          Cancelar
                        </Link>
                      </div>
                    </form>
                  )}
                </DialogContentText>
              </DialogContent>
            </div>
          )}
          <div className="w-full h-full relative">
            {loading && pdfUrl ? (
              <Loading />
            ) : (
              !loading &&
              pdfUrl && (
                <>
                  <iframe
                    src={pdfUrl}
                    title="PDF Viewer"
                    className="w-full h-full border-none hidden md:block"
                  />
                  <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className='md:hidden block w-full text-center py-3 uppercase underline text-main_dark font-bold'>Abrir PDF</a>
                </>
              )
            )}
          </div>
        </section>
      </Dialog>
    </>
  )
}
