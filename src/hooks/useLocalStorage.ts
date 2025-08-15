import { useEffect, useState } from "react";

export function useLocalStorage(userId: number | null) {
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (userId !== null) {
      const token = userId.toString();
      localStorage.setItem("token", token);
    }

    const tokenInStorage = localStorage.getItem("token");
    setHasToken(!!tokenInStorage);
  }, [userId]);

  return { hasToken, id: localStorage.getItem("token") };
}
