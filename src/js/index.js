//1
const getMovies = async () => {
  const url = `http://localhost:3000/movies`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Винникла помилка ${response.status}`);
    }
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error(`Помилка при завантаженні ${error}`);
    return {};
  }
};
console.log(getMovies());
//2
const addMovies = async (movie) => {
  const url = `http://localhost:3000/movies`;
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "aplication/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Винникла помилка ${response.status}`);
    }
    const adedMovie = await response.json();
    return adedMovie;
  } catch (error) {
    console.error(`Помилка при завантаженні ${error}`);
    return null;
  }
};
//   addMovies({
//     title: "Screem",
//     genre: "Horror",
//     director: "Fridrih Nolan",
//     year: 2000,
//   })
// );
//3
const updeateMovie = async (id, movie) => {
  const url = `http://localhost:3000/movies/${id}`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "aplication/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Винникла помилка ${response.status}`);
    }
    const upatedMovie = await response.json();
    return upatedMovie;
  } catch (error) {
    console.error(`Помилка при завантаженні ${error}`);
    return null;
  }
};
// console.log(
//   updeateMovie(5, {
//     id: "5",
//     title: "Green",
//     genre: "Novel",
//     director: "Christopher N",
//     year: 2015,
//   })
// );
//4
const updatePartOfMovie = async (id, movie) => {
  const url = `http://localhost:3000/movies/${id}`;
  try {
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "aplication/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Винникла помилка ${response.status}`);
    }
    const upatedMovie = await response.json();
    return upatedMovie;
  } catch (error) {
    console.error(`Помилка при завантаженні ${error}`);
    return null;
  }
};
// console.log(
//   updatePartOfMovie(4, {
//     year: 2015,
//   })
// );
//5
const deleteMovie = async (id) => {
  const url = `http://localhost:3000/movies/${id}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Винникла помилка ${response.status}`);
    }
    const deletedPost = await response.json();
    return deletedPost;
  } catch (error) {
    console.error(`Помилка при delet ${error}`);
    return null;
  }
};
console.log(deleteMovie(3));
