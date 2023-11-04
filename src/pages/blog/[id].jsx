import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { client } from "../../../libs/client";


export default function BlogId({ blog }) {
  return (
    <>
    <Header />
    <main  className="mt-8 mx-auto max-w-prose h-screen">
      <h1 className="text-xl font-bold mb-4">{blog.title}</h1>
      <div dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
        className="mb-4"/>
        <p>{blog.publishedAt}</p>
    </main>
    <Footer />
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};


export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
}