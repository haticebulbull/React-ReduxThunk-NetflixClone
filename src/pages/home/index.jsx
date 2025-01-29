import { useEffect, useState } from "react";
import Hero from "./Hero";
import Error from "../../components/error";
import Loader from "../../components/loader";
import MovieList from "./MovieList";
import api from "../../api";

const Home = () => {
  const [genres, setGenres] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/genre/movie/list?language=tr")
      .then((res) => setGenres(res.data.genres))
      .catch((err) => setError(error.message));
  }, []);

  return (
    <div>
      <Hero />

      {error ? (
        <Error info={error} />
      ) : !genres ? (
        <Loader />
      ) : (
        <div>
          {genres?.map((i) => (
            <MovieList key={i.id} genre={i} />
          ))}{" "}
        </div>
      )}
    </div>
  );
};

export default Home;
