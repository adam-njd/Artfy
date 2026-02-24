import { useEffect, useState } from "react";
import { UserDataContext } from "./UserDataContext";

const STORAGE_KEY = "userData";

const readStoredUserData = () => {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(readStoredUserData);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
      console.log("User data stored:", userData);
    } catch {
      // Ignore storage errors (e.g., quota, privacy mode)
    }
  }, [userData]);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
