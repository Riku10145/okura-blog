import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <footer className="border-t-2 py-14 flex justify-center bg-slate-50">
        <div className="flex items-center">
          <div className="pr-36">
            <Link href={"/"}>
              <Image
                src="/Idea with lighting bulb and clipboard notes.svg"
                alt="アイコンの画像"
                width={50}
                height={50}
                className="mb-3"
              />
              シンプルなブログ
            </Link>
            <p className="text-gray-400 mt-3">日常を気軽につぶやこう</p>
          </div>

          <div className="flex flex-1 gap-7 text-gray-400">
            <div className="space-y-4">
              <p>ホーム</p>
              <p>使い方</p>
              <p>スポンサー</p>
            </div>
            <div className="space-y-4">
              <p>利用規約</p>
              <p>サポート</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
