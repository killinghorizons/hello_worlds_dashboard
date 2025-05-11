interface Props {
  label: String
  loading: React.ReactNode
  pending: boolean
}

const SubmitButton = ({ label, loading, pending }: Props) => {
  return (
    <button type="submit" className="btn btn-primary w-full btn-xl">
      {pending ? loading : label}
    </button>
  )
}

export default SubmitButton
