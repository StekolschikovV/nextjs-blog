import { id } from "date-fns/locale";
import Layout from "../../components/layout";
import { getUserData } from "../../lib/users";

export default function User({ userData }) {
  return (
    <Layout>
      {userData.id}
      {userData.name}
    </Layout>
  );
}

export async function getStaticPaths() {
  // const paths = getAllPostIds();
  // paths.push({ params: { id: 'ssg-ssr1' }})
  // console.log(paths);
  return {
    paths: [
      { params: { id: "user1" } },
      { params: { id: "user2" } },
      { params: { id: "user3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const user = await getUserData(params.id);
  console.log("--", params.id, user);

  return {
    props: {
      userData: user,
    },
  };
}
