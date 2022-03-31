
export const Panier = (props) => {

  const { id, title, price } = props.panier;

  return (
    <tr key={id}>
      <td>{title}</td>
      <td>{price}€</td>
      <td>
        <button onClick={() => props.handleClick(id)}>Supprimer</button>
      </td>
    </tr>
  );
};
