// Comps
import Heading from "@/components/Heading";
import UpdateForm from "@/components/forms/UpdateForm";
// Db
import { getById } from "@/actions/helloActions";

interface Props {
  params: {
    id: string;
  };
}

const Update = async ({ params }: Props) => {
  const { id } = await params;
  const {
    category,
    code,
    language,
    slug,
    id: idDb,
  } = await getById(parseInt(id));

  return (
    <section>
      <Heading text="Update" />
      <UpdateForm
        category={category}
        code={code}
        language={language}
        slug={slug}
        id={idDb}
      />
    </section>
  );
};

export default Update;
