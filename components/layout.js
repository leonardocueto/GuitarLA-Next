import Head from "next/head"

export default function Layout({children, title = '', description = ''}) {
  return (
    <>
    <Head>
        <title>{`GuitarLA - ${title}`}</title>
        <meta name="description" content={description} />

    </Head>
    <h1>Desde layout</h1>
      {children}
    </>
  )
}
