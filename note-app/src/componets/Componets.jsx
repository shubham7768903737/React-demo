import React from 'react'

export function Card(){
    return <h1>Card Componet</h1>
}

export function ButtonComp(){
    return <button>Submit</button>
}

export function InputComp(){
    return <input type='text'/>
}

const Componets = () => {
  return (
    <div>
        <Card/>
        <InputComp/>
        <ButtonComp/>
    </div>
  )
}

export default Componets