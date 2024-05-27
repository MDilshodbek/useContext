import { createContext, useState, useEffect } from "react";

export const MovieContext = createContext(null);

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "0e3bf9ae64msh7e46bac570b08cbp1abc14jsnfcaebf2e13e1",
            "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
          },
        }
      );
      const data = await response.json();
      setMovies(data.d);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run only once on mount

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
