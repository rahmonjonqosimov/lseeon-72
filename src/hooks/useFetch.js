import { useEffect, useState } from "react";
import axios from "../api";

export function useFetch(api, ...rest) {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(api)
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [...rest]);
  return { data, loading, error };
}
