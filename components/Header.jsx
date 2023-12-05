import Link from "next/link";

export function Header() {
  return (
    <>
        <h1 className="text-lg m-8 pb-4"> 
          <Link href={"/"}>
          シンプルなブログ
          </Link>
        </h1>
    </>
  );
}


