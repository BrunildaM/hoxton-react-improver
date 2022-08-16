import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Header.css'


type User= {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
}


function Header() {
    const navigate = useNavigate()
    const params = useParams()
    const[user, setUser]= useState<User[]>([])


    useEffect(()=> {
        fetch(`http://localhost:3005/user/${params.id}`)
        .then(r => r.json())
        .then(userToDisplay => setUser(userToDisplay))
    }, [])

    function addUserToDb() {
        fetch('http://localhost:3005/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...user})
        })
            .then(resp => resp.json())
            navigate('/signUp')
    }

    return (
        <div>
        <h1 className="header">Popular cryptocurrencies</h1>

        <button onClick={() => addUserToDb()}>Sign Up</button>
        </div>

    )
}

export default Header