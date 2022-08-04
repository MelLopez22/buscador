import React, { useState, useEffect } from "react";

const Buscador = () => {
  //setear los hooks
  //trabajamos con los datos a traer
  const [users, setUsers] = useState([]);
  //hooks de busqueda
  const [search, setSearch] = useState("");

  //funcion para traer los datos de la API
  const URL = "https://jsonplaceholder.typicode.com/users";

  //los datos que vamos a traer
  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setUsers(data)
  };
  //aqui ejecutamos la la funcion
  showData();

  //funcion de busqueda, capturamos lo q el usuario ingresa
  const searcher = (e) => {
    setSearch(e.target.value)
    console.log(e.target );
  }

  //funcion de filtrado

const results = !search ? users : users.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase()))

  
  useEffect(() => {
    showData()
  }, [])

  return (
    <div>
<input onChange={searcher} value={search} type="text" placeholder="search" className="form-control" />

      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr className="bg-curso text-white">
            <th>NAME</th>
            <th>USER NAME</th>
          </tr>
        </thead>

        <tbody>
          { results.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

          }
export default Buscador;

//prueba primer commit 
