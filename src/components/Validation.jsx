import { ProfilContext } from "../context/profilContext";
import { useContext } from "react";
import { Profil } from "./Profil";
import { PanierValidation } from "./PanierValidation";
import { PanierContext } from "../context/panierContext";

export const Validation = () => {
  const { panier } = useContext(PanierContext);
  const { profil } = useContext(ProfilContext);

  const total = () => {
    let total = 0;
    panier.map((panier) => {
      total += panier.price;
    });
    return total;
  };

  return (
    <div>
      <div className="container">
        <h1>- Bon de commande -</h1>
        <h2>Votre commande a bien été validée !</h2>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Description</th>
              <th>Prix</th>
            </tr>
          </thead>
          <tbody>
            {panier.map((panier, index) => {
              return <PanierValidation panier={panier} key={index} />;
            })}
          </tbody>
        </table>
        <h3 className='total'>Total { total() }€</h3>
      </div>
      <hr />
      <div className="container">
        <h2>Vos informations de livraison</h2>
        <Profil profil={profil} />
      </div>
    </div>
  );
};
