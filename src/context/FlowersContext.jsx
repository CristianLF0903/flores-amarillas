import { createContext, useState } from "react";

export const FlowersContext = createContext();

export function FiltersProvider({ children }) {
  const [flowers, setFlowers] = useState(false);
  return (
    <FlowersContext.Provider
      value={{
        flowers,
        setFlowers,
      }}
    >
      {children}
    </FlowersContext.Provider>
  );
}
