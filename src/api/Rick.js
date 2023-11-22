import axios from "axios";

const Rich = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/character/',
});

export default Rich;