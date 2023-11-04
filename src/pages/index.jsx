import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import { client } from "../../libs/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ blog }) {
  console.log(blog);
  return (
    <>
      <Head>
        <title>オクラのブログ</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <div>
        <Header />
        <main className="mt-8 mx-auto max-w-prose h-screen">
          <ul className="mt-4 space-y-4">
            {blog.map((blog) => (
                <li key={blog.id} className="text-blue-800 hover:text-blue-600 underline">
                    {blog.img ? (<img src={blog.img.url} className="w-56 h-40 inline-block m-2"/>) : null}
                  <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                </li>
            ))}
          </ul>
        </main>
        <Footer />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};
