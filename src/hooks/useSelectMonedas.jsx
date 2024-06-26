import {useState} from 'react'
import styled from '@emotion/styled'


const Label=styled.label`
color: #FFF;
display: block;
font-family: 'Lato',sans-serif;
font-size: 24px;
font-weight: 700;
margin: 15px 0;
`

const Select=styled.select`
width: 100%;
font-size: 18px;
padding:14px ;
border-radius: 10px;

`
export const useSelectMonedas = (label,opciones) => {
  const [state, setstate] = useState('');

  
   const SelectMonedas=()=>{

    return(
        <>
        
        <Label htmlFor="">{label}</Label>

        <Select value={state} onChange={e=>setstate(e.target.value)} name="" id="">
            <option value="">--Seleccione--</option>
            {opciones.map(opcion=>(
                <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>
            ))}
        </Select>
        </>
    )

   }

   return [state,SelectMonedas]
}
export default useSelectMonedas