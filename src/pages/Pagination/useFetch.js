import { useState, useEffect } from "react";
import paginate from "./utils";
const url = "https://api.github.com/users/codrops/followers?per_page=100";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setData(paginate(data));
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, data };
};
