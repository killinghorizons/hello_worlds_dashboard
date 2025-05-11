// Comps
import Heading from "@/components/Heading";
import Table from "@/components/Table";
// db
import { getData } from "@/actions/helloActions";

const Home = async () => {
  const data = await getData();

  return (
    <div>
      <Heading text="Dashboard" />
      <Table data={data} />
    </div>
  );
};

export default Home;
