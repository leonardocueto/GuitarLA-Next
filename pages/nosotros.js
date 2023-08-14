import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description='Sobre nosotros, guitarLa, tienda de música'
    >
      <main className='contenedor'>
        <h1 className='heading'>Nosotros</h1>
        <div className={styles.contenido}>
          <Image
            src='/img/nosotros.jpg'
            alt='Imagen sobre nosotros'
            width={1000}
            height={800}
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              dictum eu mauris vel venenatis. Mauris nec purus sed purus mollis
              luctus. Sed vitae lacus accumsan, molestie elit eu, posuere urna.
              Mauris pulvinar orci accumsan tortor consectetur, id pellentesque
              lacus dapibus. Interdum et malesuada fames ac ante ipsum primis in
              faucibus.
            </p>
            <p>
              Quisque lacus enim, vehicula sit amet arcu ac, accumsan commodo
              elit. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia curae; Duis efficitur lacus eget feugiat
              rutrum. Quisque vel nisl rhoncus, molestie enim a, cursus justo.
              In id cursus risus. Proin consectetur est porta lacinia egestas.
              Nullam consectetur felis at sem vulputate, sit amet rutrum nibh
              porttitor.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
