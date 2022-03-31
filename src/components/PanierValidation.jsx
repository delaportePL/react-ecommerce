export const PanierValidation = (props) => {

  const { title, description, price } = props.panier;

  return (
    <tr>
      <td>{title}</td>
      <td>{description}</td>
      <td>{price}€</td>
    </tr>
  );
};
