//Assets
export const netflixLoginBackgroundImageURL = "https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg" 

export const neflixUserIconURL = "https://www.iconpacks.net/icons/5/free-icon-gamer-boy-15169.png"

export const netflixLogoURL = "https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"

// firebase
export const firebaseConfig = {
  apiKey: "AIzaSyB5eTMhwbbEkqFvOY62l25sHbDrS8lJNB4",
  authDomain: "gpt-netflix-3.firebaseapp.com",
  projectId: "gpt-netflix-3",
  storageBucket: "gpt-netflix-3.firebasestorage.app",
  messagingSenderId: "908348793906",
  appId: "1:908348793906:web:11cb28f49668f17503482b",
  measurementId: "G-JDZ3VSFNDF"
};
// tmdb
export const trailerNumber = 0;


export const tmdbNowStreamingApi = "https://api.themoviedb.org/3/movie/now_playing?page=1"
export const tmdbVideosApi = 'https://api.themoviedb.org/3/movie/';
export const tmdbMovieSearchAPI= 'https://api.themoviedb.org/3/search/movie?query='
export const tmdbMovieDetailsAPI = 'https://api.themoviedb.org/3/movie/'
export const tmdbPosterBaseUrl ="https://image.tmdb.org/t/p/original/"


export const allMoviesApi = [
  // {name: "upcoming", api: "https://api.themoviedb.org/3/movie/upcoming?page=1"},
  {name: "now_streaming", api: "https://api.themoviedb.org/3/movie/now_playing?page=1"},
  {name: "top_rated", api: "https://api.themoviedb.org/3/movie/top_rated?page=1"},
  // {name: "popular", api: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'},
]

export const tmdbOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`
  }
};