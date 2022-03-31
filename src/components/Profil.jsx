export const Profil = (props) => {

  const { name, email, address, commentary } = props.profil;
  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Email</th>
          <th>Adresse</th>
          <th>Commentaire</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>{address}</td>
          <td>{commentary ? commentary : "Pas de commentaire"}</td>
        </tr>
      </tbody>
    </table>
  );
};
