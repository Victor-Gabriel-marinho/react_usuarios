import "./style.css";
import { useState } from "react";
import Excluir from "../../assents/excluir.png";

function Home() { 
  const [users, setUsers] = useState([])
  const [nome, setnome] = useState("")
  const [email, setemail] = useState("")
  const [idade, setidade] = useState("")
  const [id, setid] = useState(1)

  const handleinput = (event) => {
    var {name, value} = event.target;

    if (name === "nome") setnome(value);
    if (name === "email") setemail(value);
    if (name === "idade") setidade(value);
  };

  const SendUsu = () => {
    setid(id+1)
    const newusu = {
      id: id,
      name: nome,
      email: email,
      age: idade,
    };
    
    setUsers([...users, newusu]);
  };

  const del_usu = (id) =>{
    const lista_usu = users.filter((user) => user.id !== id );
    setUsers(lista_usu);
  };

  return (
    <div className="container">
      <form action="">
        <h1>Cadastro</h1>
        <input type="text" name="nome" placeholder="Nome" onChange={handleinput} />
        <input type="email" name="email" placeholder="Email" onChange={handleinput} />
        <input type="number" className="Age" name="idade" placeholder="idade" onChange={handleinput} />

        <button type="button" onClick={SendUsu}>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div className="card">
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Email: <span>{user.email}</span></p>
            <p>idade:<span>{user.age}</span></p>
          </div>
          <button onClick={() => del_usu(user.id)}>
            <img src={Excluir} alt="" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;