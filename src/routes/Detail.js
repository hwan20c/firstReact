import { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../Button.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const { id } = useParams();

  const getMovie = useCallback(async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      const json = await response.json();

      if (json.status === "ok") {
        setMovie(json.data.movie);
      } else {
        console.error("Error fetching movie data");
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching movie data", error);
    }
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <div>
      <button onClick={handleGoBack} className={styles.go_back_button}>
        뒤로가기
      </button>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movie.large_cover_image} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.description_full}</p>
          <ul>
            {movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Detail;
