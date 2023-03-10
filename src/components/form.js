import React, {useState, useEffect, useRef} from 'react'
import '..'
const Form = (props) => {
    const [input, setInput] = useState('')

  const inputRef = useRef(null)

  useEffect(() =>{
    inputRef.current.focus()
  })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const Lidasubmitir = e => {
        e.preventDefault()

       props.onSubmit({
         id:Math.floor(Math.random()*10000),
         text: input
       })

       setInput('')
    }

  return (
    <form className='todo-form' onSubmit={Lidasubmitir}>
        <input type = "text" 
            placeholder='Adicionar tarefa' 
            value = {input} 
            name  = "text" 
            className='todo-input'
            onChange = {handleChange}
            ref={inputRef}>
        </input>
        <button className='todo-button'>Adicionar</button>
    </form>

  )
}

export default Form
