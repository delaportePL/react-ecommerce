import { Navigation } from "./components/Navigation";
import { PanierProvider } from "./context/panierContext";
import { ProfilProvider } from "./context/profilContext";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <PanierProvider>
        <ProfilProvider>
          <Navigation />
          <Outlet />
        </ProfilProvider>
      </PanierProvider>
    </div>
  );
}

export default App;
