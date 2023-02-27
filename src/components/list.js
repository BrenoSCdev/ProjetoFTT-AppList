import React, {useState} from 'react'
import Form from './form'
import Tarefa from './tarefa'

function List() {
    const [tarefas, setTarefas] = useState([])

    const addTarefa = tarefa => {
        if(!tarefa.text || /^\s*$/.test(tarefa.text)){
            return
        }

        const novaTarefa = [tarefa, ...tarefas]

        setTarefas(novaTarefa)
    }

    const atualizaTarefa = (tarefaId, novoValor) => {
        if(!novoValor.text || /^\s*$/.test(novoValor.text)){
            return
        }
        setTarefas(prev => prev.map(item => (item.id === tarefaId ? novoValor : item)))
    }


    const removeTarefa = id => {
        const removeArr = [...tarefas].filter(tarefa => tarefa.id !== id)
        setTarefas(removeArr)
    }

 

    const completeTarefa = id => {
        let tarefasAtualizadas = tarefas.map(tarefa => {
            if (tarefa.id === id) {
                tarefa.completa = !tarefa.completa
            }
            return tarefa
        })
        setTarefas(tarefasAtualizadas)
    }

  return (
    <div>
        <h1>
            Qual a tarefa de hoje?
        </h1>
        <Form onSubmit={addTarefa}/>
        <Tarefa
        tarefas={tarefas}
        completeTarefa={completeTarefa}
        removeTarefa={removeTarefa}
        atualizaTarefa={atualizaTarefa}
        />
    </div>
  )
}

export default List