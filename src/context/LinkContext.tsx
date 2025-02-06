import { createContext, useContext, useState, type ReactNode } from "react";

type ContextType = {
  activeLink: string;
  setActiveLink: (link: string) => void;
};

const ActiveLinkContext = createContext<ContextType | undefined>(undefined);

export function ActiveLinkProvider({ children }: { children: ReactNode }) {
  const [activeLink, setActiveLink] = useState("Dashboard");

  return (
    <ActiveLinkContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </ActiveLinkContext.Provider>
  );
}

export function useActiveLink() {
  const context = useContext(ActiveLinkContext);
  if (!context) {
    throw new Error("useActiveLink must be used within ActiveLinkProvider");
  }
  return context;
}
