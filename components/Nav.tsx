import Link from "next/link"
import ScrollTopButton from "./ScrollTopButton"

const Nav = () => {
  return (
    <nav className="navbar h-20 sticky top-0 left-0 z-50 backdrop-blur-2xl shadow-sm">
      <div className="h-full flex items-center justify-between container mx-auto px-5">
        <div className="flex items-center gap-4">
          <Link href="/" className="btn btn-primary btn-dash btn-sm">
            Dashboard
          </Link>
          <Link href="/create" className="btn btn-success btn-dash btn-sm">
            Create
          </Link>
        </div>
        <ScrollTopButton />
      </div>
    </nav>
  )
}

export default Nav
