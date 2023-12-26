import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse, getNestedAnimeResponse } from "@/Libs/Api-Libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limi=5");
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime");

  const generateNumberMin = () => {
    let firstNum = Math.floor(Math.random() * recommendedAnime.length - 4);
    let secondNum = firstNum + 4;
    const ArrRandomNumb = [];
    ArrRandomNumb.push(firstNum);
    ArrRandomNumb.push(secondNum);
    return ArrRandomNumb;
  };

  const randomArr = generateNumberMin();

  recommendedAnime = {
    data: recommendedAnime.slice(randomArr[0], randomArr[4]),
  };
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
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
