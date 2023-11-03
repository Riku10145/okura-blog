import Link from "next/link";

export function Header() {
  return (
    <>
        <h1 className="font-bold text-3xl mt-2 mb-8 border-b-2 py-4"> 
          <Link href={"/"}>
          オクラのブログ
          </Link>
        </h1>
    </>
  );
}


