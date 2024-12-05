import { useState } from "react";
import imglogo from './img/goku.png'

function alertaDeerrorBuscando() {
  Swal.fire({
    icon: "error",
    title: "Oops... <br> no se encontro personaje <br> que busca",
  });
}

function alertaDeerrorSinInsertar() {
  Swal.fire({
    icon: "error",
    title: "Oops... <br> Insentar un nombre <br> Para Buscar personaje De Dragonball",
  });
}

function ApiGoku() {
  const [datavalue, setDatavalue] = useState("");
  const [dataname, setDataname] = useState("");
  const [dataKit, setDataKit] = useState("");
  const [dateraza, setDatarace] = useState("");
  const [dataDescricion, setDataDecricion] = useState("");
  const [dataimg, setDataimg] = useState("");

  function Apidata(valueInfop) {
    fetch(`https://dragonball-api.com/api/characters?name=${valueInfop}`)
      .then((resultado) => resultado.json())
      .then((DataInfop) => {
        if (datavalue === '') {
            alertaDeerrorSinInsertar();
        }else if(!DataInfop[0]) {
            alertaDeerrorBuscando();
        } else {
          let namePersonaje = DataInfop[0]?.name;
          let personajeKit = DataInfop[0]?.ki;
          let personajerace = DataInfop[0]?.race;
          let personajedecricion = DataInfop[0]?.description;
          let personajeImg = DataInfop[0]?.image;
          setDataname(namePersonaje);
          setDataKit(`El poder del personaje: ${personajeKit}`);
          setDatarace(personajerace);
          setDataDecricion(`El poder del personaje: ${personajedecricion}`);
          setDataimg(personajeImg);
        }
      })
      .catch((error) => console.error(error));
  }

  function inputDataText(datavalue) {
    setDatavalue(datavalue.target.value);
  }

  function clickbutton() {
    Apidata(datavalue);
  }

  return (
    <>
      <div className="contenedor">
        <div className="contenedorLogo">
            <img src={imglogo} alt="" className="imglogo"/>
        </div>
        <div className="contenedorCuerpo">

                <input
                type="text"
                value={datavalue}
                onChange={inputDataText}
                className="inputtex"
                />
                <button onClick={clickbutton}>Buscar</button>
                <h2 className="textname">{dataname}</h2>
                <p>{dataKit}</p>
                <p>{dateraza}</p>
                <img src={dataimg} alt="" className="imagenPersonaje" />
                <p className="descricion">{dataDescricion}</p>
        </div>
      </div>
    </>
  );
}

/* esportando funcion main para renderisacion */
export default ApiGoku;
