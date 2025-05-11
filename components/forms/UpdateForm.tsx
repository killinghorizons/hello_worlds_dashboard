import { IHelloWorld } from "@/types/HelloWorld";
import SubmitButton from "./SubmitButton";

const UpdateForm = ({ language, code, slug, category, id }: IHelloWorld) => {
  // Comps

  return (
    <form action="">
      {/* Langue */}
      <div className="mb-2">
        <label htmlFor="language" className="label block mb-4">
          Language
        </label>
        <input
          type="text"
          name="language"
          id="language"
          required
          defaultValue={language}
          className="input input-xl w-full block"
        />
      </div>
      {/* Category  */}
      <div className="mb-2">
        <label htmlFor="category" className="label block mb-4">
          Category
        </label>
        <input
          type="text"
          name="category"
          id="category"
          required
          defaultValue={category}
          className="input input-xl w-full block"
        />
      </div>
      {/* Slug  */}
      <div className="mb-2">
        <label htmlFor="slug" className="label block mb-4">
          Slug
        </label>
        <input
          type="text"
          name="slug"
          id="slug"
          required
          defaultValue={slug}
          className="input input-xl w-full block"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="code" className="label block mb-4">
          Code
        </label>
        <textarea
          name="code"
          id="code"
          required
          className="textarea w-full min-h-[250px]"
          defaultValue={code}
        ></textarea>
      </div>
      <SubmitButton label="Create" loading="Creating..." />
      {/* <button type="submit" className="btn btn-warning w-full btn-xl">
        Update
      </button> */}
    </form>
  );
};

export default UpdateForm;
