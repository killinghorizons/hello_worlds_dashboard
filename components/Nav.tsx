import Link from "next/link";

const Nav = () => {
  return (
    <nav className="h-20 sticky top-0 left-0 z-50 backdrop-blur-2xl">
      <div className="h-full flex items-center gap-4 container mx-auto px-5">
        <Link href="/" className="btn btn-primary btn-dash btn-sm">
          Dashboard
        </Link>
        <Link href="/create" className="btn btn-success btn-dash btn-sm">
          Create
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
