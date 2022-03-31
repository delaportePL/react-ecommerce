import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfilContext } from "../context/profilContext";

export const Form = () => {

  const [form, setForm] = useState({
    name: "", email: "", address: "", commentary: "",
  });

  const profilContext = useContext(ProfilContext);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    const { name, email, address, commentary } = form;
    if(name.length > 0 && address.length > 0 &&
      email.length > 0 && email.includes("@") && email.includes(".")) {
      profilContext.setProfil({ ...form });
      navigate("/validation");
    }else{
      e.preventDefault();
      alert("Veuillez compléter tous les champs et/ou saisir une adresse email valide.");
    }
  }

  return (
    <div>
      <h2>Vos informations</h2>
      <form onSubmit={handleSubmit}>

        <input type="text" className="form-control"
          name="name" placeholder="Nom"
          value={form.name} onChange={handleChange} />
        <input type="text" className="form-control"
          name="email" placeholder="Email"
          value={form.email} onChange={handleChange} />
        <input type="text" className="form-control"
          name="address" placeholder="Adresse"
          value={form.address} onChange={handleChange} />

        <textarea className="form-control"
          name="commentary" placeholder="Commentaire"
          value={form.commentary} onChange={handleChange} />

        <input type="submit" className="submit-btn" value="Commander" />
      </form>
    </div>
  );
};
