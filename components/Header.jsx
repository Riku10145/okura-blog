import Link from "next/link";

export function Header() {
  return (
    <>
        <h1 className="font-bold text-3xl"> 
      <Link href={"/"}>
          オクラのブログ
      </Link>
        </h1>
    </>
  );
}


