interface Props {
  text: string
}

const Heading = ({ text }: Props) => {
  return (
    <div className="border-b border-b-neutral-600 mb-10">
      <h1 className="text-5xl font-bold mb-10">{text}</h1>
    </div>
  )
}

export default Heading
