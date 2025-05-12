import links from "@/db/prog_links.json"
import Link from "next/link"

const WikipediaList = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-10">
        <Link
          href="https://en.wikipedia.org/wiki/List_of_programming_languages"
          className="link link-primary"
        >
          Source
        </Link>
      </h2>
      <ul className="space-y-2">
        {links.map(link => (
          <li key={crypto.randomUUID()} className="list-item">
            <Link href={link.href} className="link">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default WikipediaList
