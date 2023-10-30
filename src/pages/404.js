import Link from "next/link";

export default function Custom404() {
    return (
      <main className="main">
        <p>ページがありません。</p>
        <Link href={"/"}>
          Homeへ戻る
        </Link>
      </main>
    );
  }