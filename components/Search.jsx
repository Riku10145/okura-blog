import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits, Highlight } from "react-instantsearch";

const algoliaClient = algoliasearch(
  "QK9FGM420D",
  "fbb5245096f49688b05787207777ea0d"
);


const searchClient = {
  ...algoliaClient,
// 検索ボックスが空のときに何も表示させない処理
  search(requests) {
    if (requests.every(({ params }) => !params.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          page: 0,
          processingTimeMS: 0,
          hitsPerPage: 0,
          exhaustiveNbHits: false,
          query: '',
          params: '',
        })),
      });
    }
    return algoliaClient.search(requests);
  },
};


// 検索結果の表示
export function Hit({ hit }) {
  return (
    <article>
      <h1>
      <Highlight attribute="title" hit={hit} />
      </h1>
      <p>
      <Highlight attribute="body" hit={hit} />
      </p>
    </article>
  );
}

// Searchコンポーネントの作成
export function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName="blog_index">
      <div className="flex justify-center items-center">
        <SearchBox
          placeholder="検索"
          classNames={{
            root: "w-1/4 border border-black rounded", // ボーダー、角丸
            form: " flex", // フレックスコンテナ、アイテムを中央揃え
            input: "flex-grow p-1 text-sm", // フレックスアイテム拡大、パディング、テキストサイズ
            submit: "mr-2",
          }}
          submit={<></>} // 送信ボタンの非表示に対応
        />
      </div>
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
}
