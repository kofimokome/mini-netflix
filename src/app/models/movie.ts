export class Movie {
  id: number;
  title: string;
  image: string;
  year: number;
  details: {
    rated: number,
    released: string,
    runtime: string,
    genres: string[],
    directors: string[],
    writers: string[],
    actors: string[],
    plot: string,
    languages: string[],
    countries: string[],
    awards: string[]
  };
}
