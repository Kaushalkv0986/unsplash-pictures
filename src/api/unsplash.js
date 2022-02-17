import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 3gf20idCA0FjZmHMtTgKcnyPtZLWzPP9iWfsLELpK4g'
  }
});