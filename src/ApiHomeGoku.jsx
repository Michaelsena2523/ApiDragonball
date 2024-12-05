import { useState } from "react";
import ErroDeBuqueda from "./erroAlerta";


function ApiGoku() {

    const [datavalue, setDatavalue] = useState('')
    const [dataname, setDataname] = useState('')
    const [dataKit, setDataKit] = useState('')
    const [dateraza, setDatarace] = useState('')
    const [dataDescricion, setDataDecricion] = useState('')
    const [dataimg, setDataimg] = useState('')

    function Apidata(valueInfop) {
        fetch(`https://dragonball-api.com/api/characters?name=${valueInfop}`)
            .then(resultado => resultado.json())
            .then((DataInfop) => {

                if(!DataInfop[0]){
                    erroNamePersonaje()
                }else if (datavalue === ""){
                    alert("inserte un nombre por favor")

                }else {
                    
                    let namePersonaje = DataInfop[0]?.name
                    let personajeKit = DataInfop[0]?.ki
                    let personajerace = DataInfop[0]?.race
                    let personajedecricion = DataInfop[0]?.description
                    let personajeImg = DataInfop[0]?.image
                    setDataname(namePersonaje)
                    setDataKit(personajeKit)
                    setDatarace(personajerace)
                    setDataDecricion(personajedecricion)
                    setDataimg(personajeImg)
                    
                }

            })
            .catch(error => console.error(error))
    }

    function inputDataText(datavalue) {
        setDatavalue(datavalue.target.value)
    }

    function clickbutton() {
        Apidata(datavalue)
    }
  



    return (
        <>

            <input type="text" value={datavalue} onChange={inputDataText} />
            <button onClick={clickbutton}>Buscar</button>
            <h2>{dataname}</h2>
            <p>{dataKit}</p>
            <p>{dateraza}</p>
            <img src={dataimg} alt="" className="imagenPersonaje" />
            <p>{dataDescricion}</p>

        </>
    )
}




/* esportando funcion main para renderisacion */
export default ApiGoku; 