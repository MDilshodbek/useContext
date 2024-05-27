import { useContext } from "react";
import Card from "./Card/card";
import { MovieContext } from "../context/movieContext";
// import { movies as mock_movies } from "../utils/movies";
// import { useState } from "react";

const Body = () => {
  const [movies] = useContext(MovieContext);

  //   const [movies, setMovies] = useState(mock_movies);

  //   const onDelete = (id) => {
  //     setMovies(movies.filter((value) => value.id !== id));
  //   };
  return (
    <div className="w-full flex flex-col items-center my-[50px] gap-[10px]">
      {movies.map((value) => (
        <Card key={value.id} {...value} />
      ))}
    </div>
  );
};

export default Body;
