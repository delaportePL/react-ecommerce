import { useContext } from "react";
import { PanierContext } from "../context/panierContext";
import { Panier } from "./Panier";
import { Form } from "./Form";

export const Checkout = () => {
  const panierContext = useContext(PanierContext);

  const total = () => {
    let total = 0;
    panierContext.panier.map((panier) => {
      total += panier.price;
    });
    return total;
  };

  function handleClick(id) {
    panierContext.setPanier(
      panierContext.panier.filter((panier) => {
        return panier.id != id;
      })
    );
  }
  let empty = panierContext.panier.length === 0 ? true : false;

  return (
    <div>
      <div className="container">
        <h1>Mon panier</h1>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prix</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>          
            { empty ?
              <tr>
                <td colSpan="3">Veuillez sélectionner au moins un article dans le catalogue</td>
              </tr> :
              panierContext.panier.map((panier, index) => {
                return <Panier panier={panier} key={index} handleClick={handleClick} />;
              })
            }
          </tbody>
        </table>
        <div>
          <h3 className='total'>Total { total() }€</h3>
        </div>
      </div>
      <hr />
      { empty ?
        null : 
        <div className="container">
          <Form />
        </div>
      }
    </div>
  );
};
