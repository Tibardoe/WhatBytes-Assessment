import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type ContextType = {
  activeLink: string;
  setActiveLink: (link: string) => void;
  showPopup: boolean;
  setShowPopup: (value: boolean) => void;
  form: {
    rank?: number;
    percentile?: number;
    score?: number;
  };
  setForm: (data: { rank: number; percentile: number; score: number }) => void;
};

const ActiveLinkContext = createContext<ContextType | undefined>(undefined);

export function ActiveLinkProvider({ children }: { children: ReactNode }) {
  const [activeLink, setActiveLink] = useState<string>("");
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState<{
    rank: number;
    percentile: number;
    score: number;
  }>(() => {
    if (typeof window !== "undefined") {
      const storedForm = localStorage.getItem("form");
      return storedForm
        ? JSON.parse(storedForm)
        : {
            rank: 0,
            percentile: 0,
            score: 0,
          };
    }
    return {
      rank: 0,
      percentile: 0,
      score: 0,
    };
  });

  useEffect(() => {
    const storedActiveLink = localStorage.getItem("activeLink");
    setActiveLink(storedActiveLink ?? "Dashboard");
  }, []);

  useEffect(() => {
    if (activeLink !== "null") {
      localStorage.setItem("activeLink", activeLink);
    }
  }, [activeLink]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("form", JSON.stringify(form));
    }
  }, [form]);

  if (!activeLink) {
    return null;
  }

  return (
    <ActiveLinkContext.Provider
      value={{
        activeLink,
        setActiveLink,
        showPopup,
        setShowPopup,
        form,
        setForm,
      }}
    >
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
