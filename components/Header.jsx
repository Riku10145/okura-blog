import Link from "next/link";

export function Header() {
  return (
    <>
        <h1 className="font-bold text-xl"> 
      <Link href={"/"}>
          オクラのブログ
      </Link>
        </h1>
    </>
  );
}


