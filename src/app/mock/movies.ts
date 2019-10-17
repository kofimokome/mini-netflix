const movies = [
    {
      id: 1,
      title: 'Joker',
      image: `https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg`,
      year: 2019,
      details: {
        rated: 8,
        released: '4 October 2019',
        runtime: '2h 2min',
        genres: ['Crime', 'Drama', 'Thriller'],
        directors: ['Todd Phillips'],
        writers: ['Todd Phillips', 'Scott Silver'],
        actors: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz'],
        plot: `In Gotham City, mentally-troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: "The Joker".`,
        languages: ['English'],
        countries: ['United States'],
        awards: ['', '']
      }
    },
    {
      id: 2,
      title: 'Gemini Man',
      image: `https://m.media-amazon.com/images/M/MV5BNjI5OTNkMzUtZDYzYy00NWQ5LTg4YzYtZmZjZDI0MGQzNGY2XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX182_CR0,0,182,268_AL_.jpg`,
      year: 2019,
      details: {
        rated: 5.7,
        released: '11 October 2019',
        runtime: '1h 57min',
        genres: ['Action', 'Drama', 'Sci-Fi'],
        directors: ['Ang Lee'],
        writers: ['David Benioff', 'Billy Ray '],
        actors: ['Will Smith', 'Mary Elizabeth Winstead', 'Clive Owen'],
        plot: `Mary Elizabeth Winstead recalls her most intense scenes with Gemini Man co-star Will Smith, but can't quite bring back her Midwest accent from "Fargo."`,
        languages: ['English'],
        countries: ['USA'],
        awards: ['fadf', 'fadsf']
      }
    },
    {
      id: 3,
      title: 'Abominable ',
      image: `https://m.media-amazon.com/images/M/MV5BMTYzY2U0NjctNDJkNS00MmE3LWFiZGQtZjllZTIzYTQ4ODJkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg`,
      year: 2019,
      details: {
        rated: 7.1,
        released: '27 September 2019',
        runtime: '2h 2min',
        genres: ['Animation', 'Adventure', 'Comedy'],
        directors: ['Jill Culton', 'Todd Wilderman'],
        writers: ['Jill Culton'],
        actors: ['Chloe Bennet', 'Albert Tsai', 'Tenzing Norgay Trainor'],
        plot: `Three teenagers must help a Yeti return to his family while avoiding a wealthy man and a zoologist who want it for their own needs.`,
        languages: ['English'],
        countries: ['USA'],
        awards: ['fadf', 'fadsf']
      }
    },
    {
      id: 4,
      title: 'Downton Abbey',
      image: `https://m.media-amazon.com/images/M/MV5BMmQxNGRkMjYtZTAyMy00MDUyLThiNmYtODI1NTkyNmI0ZTNlXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX182_CR0,0,182,268_AL_.jpg`,
      year: 2019,
      details: {
        rated: 7.8,
        released: '20 September 2019',
        runtime: '2h 2min',
        genres: ['Drama', 'Romance'],
        directors: ['Michael Engler'],
        writers: ['Julian Fellowes', 'Julian Fellowes'],
        actors: ['Tuppence Middleton', 'Matthew Goode', 'Maggie Smith'],
        plot: `The continuing story of the Crawley family, wealthy owners of a large estate in the English countryside in the early 20th century.`,
        languages: ['English'],
        countries: ['USA'],
        awards: ['fadf', 'fadsf']
      }
    },
    {
      id: 5,
      title: 'Hustlers',
      image: `https://m.media-amazon.com/images/M/MV5BNjM5ZTNiNGMtMDA2OC00MDYyLWEyNzAtOWZmMzFlY2VmOWM4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg`,
      year: 2019,
      details: {
        rated: 6.6,
        released: '13 September 2019',
        runtime: '1h 50min',
        genres: ['Comedy', 'Crime', 'Drama'],
        directors: ['Lorene Scafaria'],
        writers: ['Jessica Pressler', 'Lorene Scafaria'],
        actors: ['Constance Wu', 'Jennifer Lopez', 'Julia Stiles'],
        plot: `Inspired by the viral New York Magazine article, Hustlers follows a crew of savvy former strip club employees who band together to turn the tables on their Wall Street clients.`,
        languages: ['English'],
        countries: ['USA'],
        awards: ['fadf', 'fadsf']
      }
    },
    {
      id: 6,
      title: 'Judy',
      image: `https://m.media-amazon.com/images/M/MV5BYmE0OTE5NWItMGYyZi00MzUxLWFjN2QtYzBkZGRjZGVmMGFmXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX182_CR0,0,182,268_AL_.jpg`,
      year: 2019,
      details: {
        rated: 7.2,
        released: '4 October 2019',
        runtime: 'fsadf',
        genres: ['fad', 'fasdf'],
        directors: ['Rupert Goold'],
        writers: ['Tom Edge', 'Peter Quilter'],
        actors: ['Renée Zellweger', 'Jessie Buckley', 'Finn Wittrock'],
        plot: `Legendary performer Judy Garland arrives in London in the winter of 1968 to perform a series of sold-out concerts.`,
        languages: ['English'],
        countries: ['USA'],
        awards: ['fadf', 'fadsf']
      }
    },
    {
      id: 7,
      title: 'It: Chapter Two',
      image: `https://m.media-amazon.com/images/M/MV5BYTJlNjlkZTktNjEwOS00NzI5LTlkNDAtZmEwZDFmYmM2MjU2XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX182_CR0,0,182,268_AL_.jpg`,
      year: 2019,
      details: {
        rated: 6.9,
        released: '6 September 2019',
        runtime: '2h 45min',
        genres: ['Drama', 'Fantasy', 'Horror'],
        directors: ['Andy Muschietti'],
        writers: ['Gary Dauberman', 'Stephen King'],
        actors: ['Jessica Chastain', 'James McAvoy', 'Bill Hader'],
        plot: `Twenty-seven years after their first encounter with the terrifying Pennywise, the Losers Club have grown up and moved away, until a devastating phone call brings them back.`,
        languages: ['English'],
        countries: ['USA'],
        awards: ['fadf', 'fadsf']
      }
    },
    {
      id: 8,
      title: 'Jexi',
      image: `https://m.media-amazon.com/images/M/MV5BYWM3OTk0NTItZjBlNi00NGE3LTk4MGQtODdlMWM2OWI5MWE3XkEyXkFqcGdeQXVyMTA2MDQ3MTQ3._V1_UX182_CR0,0,182,268_AL_.jpg`,
      year: 2019,
      details: {
        rated: 7.0,
        released: '11 October 2019',
        runtime: '1h 24min',
        genres: ['Comedy'],
        directors: ['Jon Lucas', 'Scott Moore'],
        writers: ['Jon Lucas', 'Scott Moore'],
        actors: ['Adam Devine', 'Alexandra Shipp', 'Rose Byrne'],
        plot: `A comedy about what can happen when you love your phone more than anything else in your life.`,
        languages: ['English'],
        countries: ['USA'],
        awards: ['fadf', 'fadsf']
      }
    }
  ]
;

export default movies;
