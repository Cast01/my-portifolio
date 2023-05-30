import { createContext, ReactNode, useState } from "react";

interface ContextType {
    menuMobileOpen: boolean;
    setMenuMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MenuMobileContextProviderProps {
    children: ReactNode
}

export const MenuMobileContext = createContext({} as ContextType);

export function MenuMobileContextProvider({children}: MenuMobileContextProviderProps) {
    const [menuMobileOpen, setMenuMobileOpen] = useState(false);

    return (
        <MenuMobileContext.Provider
        value={{ menuMobileOpen, setMenuMobileOpen }}
        >
        {children}
        </MenuMobileContext.Provider>
    );
}