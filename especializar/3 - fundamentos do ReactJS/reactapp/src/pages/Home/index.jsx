/* Hooks:
 * Funções que permitem vc ligar, conectar
 * os recursos de estado e ciclo de vida do React
 * a partir de componentes totalmente funcionais 
 * 
 * Ex: useState, useEffect
*/
import React, { useState, useEffect } from "react";
import "./styles.css"

import { Card } from "../../components/Card"

export function Home() {
  // Estado
  /*
   * Armazenar valores que serão utilizados na interface
   * e quando o conteúdo dessa variável mudar,
   * isso vai refletir na interface em tempo real
   * 
   * Imutabilidade:
   * o princípio que os estados do React respeita
   */
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({name: '', avatar: ''});

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };
    // prevState: pegar o conteúdo anterior do estado
    setStudents(prevState => [...prevState, newStudent]);
  }

  // useEffect é executado automaticamente assim que a interface for renderizada
  // Consumindo uma API
  useEffect(() => {
    // Ações que eu quero que execute
    fetch('https://api.github.com/users/rodrigorgtic')
      .then(response => response.json())
      .then(data => {
        // pegando users de forma dinâmica
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        })
      })

    // Array do useEffect vazio, significa que será executado uma única vez (interface renderizado)
    // Toda vez que o estado students está mudando, 
    // o useEffect vai ser chamado (estado dependente)
  }, [])

  /*
   * Utilizando o useEffect de forma assíncrona
   * É preciso criar uma função assíncrona 
   * e chamá-la dentro do useEffect
   * 
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(fetch('https://api.github.com/users/rodrigorgtic')) 
        const data = await response.json()
  
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        })
      }
    }, [])
  */


  return (
    // Adiciona-se um fragmento <></>
    // ou uma div (embrulhando as tags) para renderizar apenas um elemento
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Fotinha de perfil" />
        </div>
      </header>
      <input 
        type="text" 
        placeholder="Digite o nome..."
        onChange={e => (setStudentName(e.target.value))} 
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {
        students.map(student => 
          <Card 
            // Chave tem que ser específica e única para cada componente
            key={student.time}
            name={student.name} 
            time={student.time}
          />
        )
      }
      {/* Propriedades nos componentes: */}
      <Card name="Rodrigo" time="10:55:25" />
      <Card name="Joao" time= "11:00:10" />
      {/* <Card /> */}
    </div>
  )
}