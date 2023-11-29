//エラーページを作成
import Link from "next/link";

export default function Error404() {
    return (
      <main className="main">
        <p>ページがありません。</p>
        <Link href="/">
          Homeへ戻る
        </Link>
      </main>
    );
  }