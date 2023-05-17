import { useEffect, useCallback } from 'react';

export default function useDebounce(effect, deps, delay) {
  const callback = useCallback(effect, deps);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}