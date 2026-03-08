import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-6 bg-black text-white">

      <Link href="/">Ana Sayfa</Link>

      <Link href="/About">Hakkımda</Link>

      <Link href="/Projects">Projeler</Link>

      <Link href="/Certifications">Sertifikalar</Link>

      <Link href="/References">Referanslar</Link>

      <Link href="/ContactUs">İletişim</Link>

    </nav>
  )
}