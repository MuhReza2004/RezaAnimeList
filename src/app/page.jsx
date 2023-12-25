import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse } from "./Libs/Api-Libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limi=8");

  return (
    <>
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/Populer"
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
