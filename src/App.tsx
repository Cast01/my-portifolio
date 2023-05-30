import { useContext } from "react";
import { AppContainer } from "./appStyle"
import { Header } from "./components/Header/Header"
import { MenuMobileContext } from "./contexts/MenuMobileContext";

import { Apresentation } from "./components/Apresentation/Apresentation";
import { Tecnologies } from "./components/Tecnologies/Tecnologies";
import { Projects } from "./components/Projects/Projects";

function App() {
  const {menuMobileOpen} = useContext(MenuMobileContext);

  return (
    <AppContainer>
      <Header />
      <Apresentation />
      <Tecnologies />
      <Projects />
    </AppContainer>
  )
}

export default App
