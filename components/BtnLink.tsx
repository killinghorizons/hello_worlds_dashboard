import Link from "next/link"

type Type = "success" | "warning" | "error"

interface Props {
  type: Type
  href: string
  label: string
}

const BtnLink = ({ type, href, label }: Props) => {
  const styles = {
    success: "btn btn-success",
    warning: "btn btn-warning",
    error: "btn btn-error"
  }

  return (
    <Link href={href} className={styles[type]}>
      {label}
    </Link>
  )
}
export default BtnLink
