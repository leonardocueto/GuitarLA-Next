import Layout from '../components/layout'
import ListadoGuitarras from '../components/listado-guitarras'
export default function Tienda() {
  return (
    <Layout
      title={'Tienda Virtual'}
      description='Tienda virtual, venta de guitarras, instrumentos, guitarLA'
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra coleccion</h1>
        <ListadoGuitarras />
      </main>
    </Layout>
  )
}
