"use client";
// Db
import { addHello } from "@/actions/helloActions";
// React
import { useFormState } from "react-dom";
// Comps
import SubmitButton from "./SubmitButton";

const CreateForm = () => {
  const [formState, action] = useFormState(addHello, {
    message: "",
  });

  return (
    <form action={action}>
      <div className="mb-4 flex items-center gap-10">
        {/* Langue */}
        <div className="w-full">
          <label htmlFor="language" className="label block mb-4">
            Language
          </label>
          <input
            type="text"
            name="language"
            id="language"
            required
            className="input w-full block"
          />
        </div>
        {/* Slug  */}
        <div className="w-full">
          <label htmlFor="slug" className="label block mb-4">
            Slug
          </label>
          <input
            type="text"
            name="slug"
            id="slug"
            required
            className="input w-full block"
          />
        </div>
        {/* Category  */}
        <div className="w-1/4">
          <label htmlFor="category" className="label block mb-4">
            Category
          </label>
          <input
            type="text"
            name="category"
            id="category"
            required
            className="input w-full block"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="code" className="label block mb-4">
          Code
        </label>
        <textarea
          name="code"
          id="code"
          required
          className="textarea w-full min-h-[250px]"
        ></textarea>
      </div>
      <SubmitButton label="Create" loading="Creating..." />
      {formState.message && (
        <div className="status status-info animate-bounce">
          {formState.message}
        </div>
      )}
    </form>
  );
};

export default CreateForm;
