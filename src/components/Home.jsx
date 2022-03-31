import { useContext } from "react";
import { Produit } from "./Produit";
import { PanierContext } from "../context/panierContext";

export const Home = () => {
  const { panier } = useContext(PanierContext);

  const produits = [
    { id: 1, title: "Écouteurs iPhone", description: "Article de luxe", price: 650 },
    { id: 2, title: "Gourde en carton", description: "Article pas fou", price: 8 },
    { id: 3, title: "Salopette Ikea", description: "Article peu commun", price: 30 },
    { id: 4, title: "iPhone 63", description: "Article du futur", price: 1520 },
  ];

  function handleClick(produit) {
    const cloneProduit = {...produit, id : Date.now()}
    panier.push(cloneProduit);
  }
  
  return (
    <div className="container">
      <h1>Catalogue</h1>
      <div className="product-container">
        {produits.map((produit, index) => {
          return (
            <Produit produit={produit} key={index} handleClick={handleClick} />
          );
        })}
      </div>
    </div>
  );
};
