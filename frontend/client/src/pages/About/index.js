import React from 'react'
import Header from '../../components/Header'
import './about.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function About() {
    
    const { id } = useParams()
    const [ pet, setPet ] = useState([])


    useEffect(() => {
        axios.get(`http://localhost:3001/pets/${id}`)
        .then((response) => {
            setPet(response.data)
            console.log(response.data)
            console.log(pet)
        }).catch(() => {
            console.log('Deu errado')
        })
    }, [])


    return (
        <div>
            <Header></Header>

            <main>
                <div className='content-cards'>
                    <div className='box-card'>
                        <header>
                            <h2>{pet.nome}</h2>
                        </header>

                        <div className='line'></div>
                        
                        <div className='box-conteudo'>
                            <p>{pet.conteudo}</p> 
                        </div>
                          
                    </div>
                </div>
            </main>
        </div>       
    )
}

export default About;