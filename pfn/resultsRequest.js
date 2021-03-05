import useSWR from "swr";
import fetch from 'isomorphic-unfetch';

const fetcher = async (url) => {
  const data = await fetch(
    url, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "d9lMOwtA3fmshualI0vfTat9yQtCp12HAVEjsnWb3FWFjDy1j9",
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
    }
  })

  return data.json()
}

export const useGetResults = () => {

  const url = "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/2790?timezone=Europe%2FLondon"

  const { data: scores, error } = useSWR(url, fetcher);

  console.log(scores)

  return { scores, error }
}