import { useCallback, useEffect, useState } from "react";

/**
 * Checks whether or not a key has been passed to local storage.
 * @param {string} key The key to be stored in local storage
 * @param {string} initialValue The initial value before it is stored
 */

export default function useLocalStorage(key, initialValue) {
  const initialize = (key) => {
    try {
      const item = localStorage.getItem(key);
      if (item && item !== "undefined") {
        return JSON.parse(item);
      }

      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    } catch {
      return initialValue;
    }
  };

  const [state, setState] = useState(null);

  useEffect(() => {
    setState(initialize(key));
  }, []);

  const setValue = useCallback(
    (value) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setState(valueToStore);
        localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.log(error);
      }
    },
    [key, setState]
  );

  return [state, setValue];
}
