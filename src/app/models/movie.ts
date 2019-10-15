export class Movie {
  id: number;
  title: string;
  image: string;
  year: number;
  details: {
    rated: number,
    released: string,
    runtime: string,
    genre: string[],
    director: string[],
    writer: string[],
    actors: string[],
    plot: string,
    language: string[],
    country: string[],
    awards: string[]
  };
}
