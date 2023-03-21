import { useDebugValue, useEffect, useState } from "react";

export function useLocalStorage(key, initialState) {
  const [state, setState] = useState(initialState);
  useDebugValue(state);

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) setState(parse(item));
  }, []);

  useEffect(() => {
    if (state.length > 0) {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [state]);

  return [state, setState];
}

function parse(obj) {
  try {
    return JSON.parse(obj);
  } catch {
    return obj;
  }
}
