"use client";
import { useFormStatus } from "react-dom";

interface Props {
  label: String;
  loading: React.ReactNode;
}

const SubmitButton = ({ label, loading }: Props) => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-success w-full btn-xl">
      {pending ? loading : label}
    </button>
  );
};

export default SubmitButton;
