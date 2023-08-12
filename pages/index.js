import Link from "next/link"
import Layout from "../components/layout"
export default function Home() {
  return (
    <>
    <Layout 
      title={'Inicio'}
      description="Blog de música, ventas de guitarras y mas"
    >
      <h1>Hola Mundo</h1>
      <Link href='/nosotros'>Nosotros</Link>
    </Layout>
    </>
  )
}
