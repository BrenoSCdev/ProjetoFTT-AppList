import React, { useState } from 'react'
import Form from './form'
import{RiCloseCircleLine} from 'react-icons/ri'
import{TiEdit} from 'react-icons/ti'

function Tarefa({tarefas, completeTarefa, removeTarefa, atualizaTarefa}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitirAtualizado = valor => {
        atualizaTarefa(edit.id, valor)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id){
        return <Form edit={edit} onSubmit={submitirAtualizado}/>
    }

  return tarefas.map((tarefa, index) => (
    <div className={tarefa.completa ? 'todo-row complete' : 'todo-row'} key={index}>

        <div key={tarefa.id} onClick={() => completeTarefa(tarefa.id)}>
            {tarefa.text}
        </div>
        <div className='icons'>
            <RiCloseCircleLine
            onClick={() => removeTarefa(tarefa.id)}
            className='delete-icon'/>
            <TiEdit onClick={() => setEdit({id: tarefa.id, value: tarefa.text})}
            className='edit-icon'/>
        </div>

    </div>
  ))
}

export default Tarefa