import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Login } from '../components/public/Login'
import { AuthProvider } from '../context/AuthProvider'
import { PrivateLayout } from '../components/private/PrivateLayout'
import { ListaBriefDiseño } from '../components/private/tables/briefs_diseño/ListaBriefDiseño'
import { RegistrarBriefDiseño } from '../components/private/tables/briefs_diseño/RegistrarBriefDiseño'
import { EditarBrief } from '../components/private/tables/briefs_diseño/EditarBrief'
import { ViewBriefDiseño } from '../components/private/tables/briefs_diseño/ViewBriefDiseño'
import { AsignacionDiseño } from '../components/private/tables/briefs_diseño/AsignacionDiseño'
import { ListaPreventa } from '../components/private/tables/preventa/ListaPreventa'
import { Metricas } from '../components/private/tables/ventas/Metricas'
import { ListaVentas } from '../components/private/tables/ventas/ListaVentas'
import { EditarVentas } from '../components/private/tables/ventas/EditarVentas'
import { ListaBriefDiseñoNew } from '../components/private/tables/briefs_diseño_new/ListaBriefDiseñoNew'
import { RegistrarBriefDiseñoNew } from '../components/private/tables/briefs_diseño_new/RegistrarBriefDiseñoNew'
import { EditarBriefNew } from '../components/private/tables/briefs_diseño_new/EditarBriefNew'
import { ViewBriefDiseñoNew } from '../components/private/tables/briefs_diseño_new/ViewBriefDiseñoNew'
import { AsignacionDiseñoNew } from '../components/private/tables/briefs_diseño_new/AsignacionDiseñoNew'
import { ListaClientes } from '../components/private/tables/clientes/ListaClientes'
import { RegistrarCliente } from '../components/private/tables/clientes/RegistrarCliente'
import { EditarCliente } from '../components/private/tables/clientes/EditarCliente'
import { Propuestas } from '../components/private/tables/briefs_diseño_new/Propuestas'
import { GenerarContrato } from '../components/private/tables/ventas/GenerarContrato'
import { ListaPrueba } from '../components/private/tables/ventas/ListaPrueba'
import { ListaCategoriasPortafolio } from '../components/private/tables/portafolio/categorias/ListaCategoriasPortafolio'
import { RegistrarCategoriasToPortafolio } from '../components/private/tables/portafolio/categorias/RegistrarCategoriasToPortafolio'
import { EditarCategoriasToPortafolio } from '../components/private/tables/portafolio/categorias/EditarCategoriasToPortafolio'
import { ListaSubCategoriasPortafolio } from '../components/private/tables/portafolio/subcategorias/ListaSubCategoriasPortafolio'
import { RegistrarSubcategoriaToPortafolio } from '../components/private/tables/portafolio/subcategorias/RegistrarSubcategoriaToPortafolio'
import { ListaItemsPortafolio } from '../components/private/tables/portafolio/items-portafolio/ListaItemsPortafolio'
import { RegistraItemToPortafolio } from '../components/private/tables/portafolio/items-portafolio/RegistraItemToPortafolio'
import { EditarItemsToPortafolio } from '../components/private/tables/portafolio/items-portafolio/EditarItemsToPortafolio'
import { EditarSubCategoriasToPortafolio } from '../components/private/tables/portafolio/subcategorias/EditarSubCategoriasToPortafolio'
import { ListaPlanes } from '../components/private/tables/planes/ListaPlanes'
import { RegistrarPlan } from '../components/private/tables/planes/RegistrarPlan'
import { EditarPlan } from '../components/private/tables/planes/EditarPlan'
import { ViewVenta } from '../components/private/tables/ventas/ViewVenta'
import { ListadoBrochure } from '../components/private/tables/briefs_brochure/ListadoBrochure'
import { RegistrarBriefBrochure } from '../components/private/tables/briefs_brochure/RegistrarBriefBrochure'
import { EditarBriefBrochure } from '../components/private/tables/briefs_brochure/EditarBriefBrochure'
import { ViewBriefBrochure } from '../components/private/tables/briefs_brochure/ViewBriefBrochure'
import { AsginacionBriefBrochure } from '../components/private/tables/briefs_brochure/AsginacionBriefBrochure'
import { ListadoFlyers } from '../components/private/tables/briefs_flyer/ListadoFlyers'
import { RegistrarBriefFlyer } from '../components/private/tables/briefs_flyer/RegistrarBriefFlyer'
import { EditarBriefFlyer } from '../components/private/tables/briefs_flyer/EditarBriefFlyer'
import { ViewBriefFlyer } from '../components/private/tables/briefs_flyer/ViewBriefFlyer'
import { AsignacionFlyer } from '../components/private/tables/briefs_flyer/AsignacionFlyer'
import { ListadoComunity } from '../components/private/tables/brief_comunity/ListadoComunity'
import { RegistrarBriegComunity } from '../components/private/tables/brief_comunity/RegistrarBriegComunity'
import { EditarBriefComunity } from '../components/private/tables/brief_comunity/EditarBriefComunity'
import { ViewBriefComunity } from '../components/private/tables/brief_comunity/ViewBriefComunity'
import { AsignacionComunity } from '../components/private/tables/brief_comunity/AsignacionComunity'
import { ListaServicios } from '../components/private/tables/servicios/ListaServicios'
import { ViewServicio } from '../components/private/tables/servicios/ViewServicio'
import { Avances } from '../components/private/tables/servicios/Avances'
import { ActaAceptacion } from '../components/private/tables/ventas/acta/ActaAceptacion'
import { ViewPreventa } from '../components/private/tables/preventa/ViewPreventa'
import { Status } from '../components/private/tables/ventas/Status'
import { EditarPreventa } from '../components/private/tables/preventa/EditarPreventa'
import { ListaVentasVencidos } from '../components/private/tables/ventas/vencidos/ListaVentasVencidos'
import { ListaVentasPorColaborador } from '../components/private/tables/ventas/ListaVentasPorColaborador'
import { StatusPorColaborador } from '../components/private/tables/ventas/colaboradores/StatusPorColaborador'
import { VistaSeguimiento } from '../components/private/tables/ventas/seguimiento/VistaSeguimiento'
import { ListaColaboradores } from '../components/private/tables/colaboradores/ListaColaboradores'
import { ReportePorColaborador } from '../components/private/tables/colaboradores/ReportePorColaborador'
import { StatusToColaborador } from '../components/private/tables/ventas/StatusToColaborador'
import { ListaProyectosAgencia } from '../components/private/tables/ventas/ListaProyectosAgencia'
import { GestordeCitas } from '../components/private/tables/citas/GestordeCitas'
import { ComentariosClientes } from '../components/private/tables/citas/comentarios/ComentariosClientes'
import { HistorialLlamadas } from '../components/private/tables/citas/HistorialLlamadas'
import { ListaHistorial } from '../components/private/tables/citas/ListaHistorial'
import { ListaPendientes } from '../components/private/tables/citas/ListaPendientes'
import { Preclientes } from '../components/private/tables/pre_clientes/Preclientes'
import { RegistroPreClientes } from '../components/private/tables/pre_clientes/RegistroPreClientes'
import { EditarPreCliente } from '../components/private/tables/pre_clientes/EditarPreCliente'
import { MetricasVencidos } from '../components/private/tables/ventas/vencidos/MetricasVencidos'
import { ListaClasificados } from '../components/private/tables/clasificados/ListaClasificados'
import { RegistrarClasificados } from '../components/private/tables/clasificados/RegistrarClasificados'
import { EditarClasificados } from '../components/private/tables/clasificados/EditarClasificados'

export const Routing = (): JSX.Element => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* GENERAL */}
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />

          {/* PRIVADO */}
          <Route path="admin" element={<PrivateLayout />}>

            {/* PLANES */}
            <Route index element={<ListaBriefDiseñoNew />} />
            <Route path="lista-planes" element={<ListaPlanes />} />
            <Route path="lista-planes/agregar" element={<RegistrarPlan />} />
            <Route path="lista-planes/editar/:id" element={<EditarPlan />} />
            {/* COLABORADORES */}
            <Route path="colaboradores" element={<ListaColaboradores />} />
            <Route path="colaboradores/reporte/:id" element={<ReportePorColaborador />} />
            {/* DISEÑO */}
            <Route path="lista-briefs-diseños" element={<ListaBriefDiseño />} />
            <Route
              path="lista-briefs-diseños/agregar"
              element={<RegistrarBriefDiseño />}
            />
            <Route
              path="lista-briefs-diseños/editar/:id"
              element={<EditarBrief />}
            />
            <Route
              path="lista-briefs-diseños/view/:id"
              element={<ViewBriefDiseño />}
            />
            <Route
              path="lista-briefs-diseños/asignar/:id"
              element={<AsignacionDiseño />}
            />

            {/* CLIENTES */}
            <Route path="lista-clientes" element={<ListaClientes />} />
            <Route path="lista-pre-clientes" element={<Preclientes />} />
            <Route path="lista-pre-clientes/agregar" element={<RegistroPreClientes />} />
            <Route path="lista-pre-clientes/editar/:id" element={<EditarPreCliente />} />

            <Route path="lista-historial" element={<ListaHistorial />} />
            <Route path="llamadas-pendientes" element={<ListaPendientes/>} />
            <Route
              path="lista-clientes/agregar"
              element={<RegistrarCliente />}
            />
            <Route
              path="lista-clientes/editar/:id"
              element={<EditarCliente />}
            />
            <Route path="lista-clientes/resumen/:id" element={<ComentariosClientes />} />

            <Route path="lista-preventa" element={<ListaPreventa />} />
            <Route path="lista-preventa/view/:id" element={<ViewPreventa />} />
            <Route path="lista-preventa/editar/:id" element={<EditarPreventa />} />

            {/* VENTAS */}
            <Route path="lista-ventas" element={<ListaVentas />} />
            <Route path="lista-ventas-agencia" element={<ListaProyectosAgencia />} />
            <Route path="lista-ventas/view/:id" element={<ViewVenta />} />
            <Route path="lista-ventas/editar/:id" element={<EditarVentas />} />
            <Route path="lista-ventas/acta-aceptacion/:id" element={<ActaAceptacion />} />
            <Route path="lista-ventas/generarContrato/:id" element={<GenerarContrato />} />
            <Route path="lista-prueba" element={<ListaPrueba />} />
            {/* VENTAS VENCIDOS */}
            <Route path="lista-ventas-vencidos" element={<ListaVentasVencidos />} />
            {/* LISTA VENTAS POR COLABORADOR */}
            <Route path="lista-ventas/:id" element={<ListaVentasPorColaborador />} />
            <Route path="lista-ventas/:id/status" element={<StatusPorColaborador />} />
            <Route path="lista-ventas/status-colabordador/:id" element={<StatusToColaborador />} />
            <Route path="seguimiento/:id" element={<VistaSeguimiento />} />
            {/* SERVICIOS */}
            <Route path="lista-servicios" element={<ListaServicios />} />
            <Route path="lista-servicios/view/:id" element={<ViewServicio />} />
            <Route path="lista-servicios/avances/:id" element={<Avances/>} />

            {/* DISEÑO NEW */}
            <Route
              path="lista-briefs-diseños-new"
              element={<ListaBriefDiseñoNew />}
            />
            <Route
              path="lista-briefs-diseños-new/agregar"
              element={<RegistrarBriefDiseñoNew />}
            />
            <Route
              path="lista-briefs-diseños-new/editar/:id"
              element={<EditarBriefNew />}
            />
            <Route
              path="lista-briefs-diseños-new/view/:id"
              element={<ViewBriefDiseñoNew />}
            />
            <Route
              path="lista-briefs-diseños-new/asignar/:id"
              element={<AsignacionDiseñoNew />}
            />
            <Route
              path="lista-briefs-diseños-new/propuestas/:id"
              element={<Propuestas />}
            />
            {/* CLASIFICADOS */}
            <Route path="lista-clasificados" element={<ListaClasificados />} />
            <Route path="lista-clasificados/registro" element={<RegistrarClasificados />} />
            <Route path="lista-clasificados/editar/:id" element={<EditarClasificados />} />

            {/* comunity */}
            <Route path="lista-briefs-comunity" element={<ListadoComunity />} />
            <Route path="lista-briefs-comunity/agregar" element={<RegistrarBriegComunity />} />
            <Route path="lista-briefs-comunity/editar/:id" element={<EditarBriefComunity />} />
            <Route path="lista-briefs-comunity/view/:id" element={<ViewBriefComunity />} />
             <Route path="lista-briefs-comunity/asignar/:id" element={<AsignacionComunity />}/>
            {/* BROCHURE */}
            <Route path="lista-briefs-brochure" element={<ListadoBrochure />} />
            <Route path="lista-briefs-brochure/agregar" element={<RegistrarBriefBrochure />} />
            <Route path="lista-briefs-brochure/editar/:id" element={<EditarBriefBrochure />} />
            <Route path="lista-briefs-brochure/view/:id" element={<ViewBriefBrochure />} />
            <Route path="lista-briefs-brochure/asignar/:id" element={<AsginacionBriefBrochure />}/>
            {/* FLYER */}
            <Route path="lista-briefs-flyer" element={<ListadoFlyers />} />
            <Route path="lista-briefs-flyer/agregar" element={<RegistrarBriefFlyer />} />
            <Route path="lista-briefs-flyer/editar/:id" element={<EditarBriefFlyer />} />
            <Route path="lista-briefs-flyer/view/:id" element={<ViewBriefFlyer />} />
             <Route path="lista-briefs-flyer/asignar/:id" element={<AsignacionFlyer />}/>
            {/* CATEGORIAS */}
            <Route path="categorias-portafolio" element={<ListaCategoriasPortafolio />} />
            <Route path="categorias-portafolio/agregar" element={<RegistrarCategoriasToPortafolio />} />
            <Route path="categorias-portafolio/editar/:id" element={<EditarCategoriasToPortafolio />} />
            {/* CATEGORIAS */}
            <Route path="subcategorias-portafolio" element={<ListaSubCategoriasPortafolio />} />
            <Route path="subcategorias-portafolio/agregar" element={<RegistrarSubcategoriaToPortafolio />} />
            <Route path="subcategorias-portafolio/editar/:id" element={<EditarSubCategoriasToPortafolio />} />

            {/* CATEGORIAS */}
            <Route path="items-portafolio" element={<ListaItemsPortafolio />} />
            <Route path="items-portafolio/agregar" element={<RegistraItemToPortafolio />} />
            <Route path="items-portafolio/editar/:id" element={<EditarItemsToPortafolio />} />
          </Route>
          <Route path="admin/lista-ventas/metricas" element={<Metricas />} />
          <Route path="admin/lista-ventas-vencidos/metricas" element={<MetricasVencidos />} />
          <Route path="admin/lista-ventas/status" element={<Status />} />
          <Route path="admin/citas" element={<GestordeCitas />} />
          <Route path="admin/historialllamadas" element={<HistorialLlamadas />} />
          {/* PUBLICO */}
          <Route
            path="*"
            element={
              <>
                <p>
                  <h1>ERROR 404</h1>
                </p>
              </>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
