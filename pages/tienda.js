import Layout from '../components/layout'
import ListadoGuitarras from '../components/listado-guitarras'
export default function Tienda({ guitarras }) {
  console.log(guitarras)
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

/* export async function getStaticProps() {
  //se ejecuta primero "servidor" > es necesario un build por cambio
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  )
  const { data: guitarras } = await respuesta.json()

  return {
    props: {
      guitarras
    }
  }
} */

export async function getServerSideProps() {
  // forma dinamica
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  )
  const { data: guitarras } = await respuesta.json()

  return {
    props: {
      guitarras
    }
  }
}
