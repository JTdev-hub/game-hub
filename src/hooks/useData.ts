import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import { FetchResponse } from "../services/fetch-response";

const useData = <T>(
  service: {
    getAll: () => { request: Promise<FetchResponse<T>>; cancel: () => void };
  },
  deps?: unknown
) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");

  useEffect(
    () => {
      setLoading(true);
      const { request, cancel } = service.getAll();
      request
        .then((res) => {
          setData(res.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => cancel();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
