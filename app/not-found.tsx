import Link from "next/link"

const NotFound = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[999] bg-neutral-900 grid place-content-center text-center">
      M'Boy are you lost...go
      <Link href="/" className="link link-primary">
        Home
      </Link>
    </div>
  )
}

export default NotFound
