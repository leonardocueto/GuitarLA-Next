import Image from 'next/image'
import logo from '../public/img/logo.svg'

export default function Header() {
  return (
    <header>
      <div className="contenedor">
        <Image src={logo.src} width={300} height={300} alt='imagen logo'/>
      </div>
    </header>
  )
}
