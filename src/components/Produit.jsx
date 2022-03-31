import CartLogo from '../img/icons8-shopping-cart-64-bis.png';

export const Produit = (props) => {

  const {id, title, description, price } = props.produit;

  return (
    <div key={id} className="product-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="card-bottom">
        <h2>{price}€</h2>
        <button onClick={() => props.handleClick(props.produit)} >
          <span>Ajouter</span> 
          <img src={CartLogo} alt="Logo panier"/>
        </button>
      </div>
    </div>
  );
};
