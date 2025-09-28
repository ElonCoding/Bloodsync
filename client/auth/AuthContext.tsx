import { createContext, useContext, useState, ReactNode } from "react";

export type Role = "guest" | "donor" | "hospital" | "admin";

type AuthCtx = {
  role: Role;
  setRole: (r: Role) => void;
};

const Ctx = createContext<AuthCtx>({ role: "guest", setRole: () => {} });

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>("guest");
  return <Ctx.Provider value={{ role, setRole }}>{children}</Ctx.Provider>;
}

export function useAuth() {
  return useContext(Ctx);
}
