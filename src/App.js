import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Temp from './Temp'
import Creatures from './Creatures'

const url = "https://botw-compendium.herokuapp.com/api/v3/compendium/"

function App() {
    const [loading, setLoading] = useState(true)
    const [creatures, setCreatures] = useState([])

    const fetchCreatures = async () => {
        setLoading(true)
        try {
            // const response = await fetch(url + "all")
            const response = await fetch(url + "entry/108")
            const creatures = await response.json()
            setLoading(false)
            setCreatures(creatures)
            console.log("Got creatures :)")
        } catch (error)
        {
            setLoading(false)
            console.log("ERROR: " + error)
        }    
    } 

    useEffect(() => {
        fetchCreatures()
    }, [])

    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        )
    }
    
    return <>
        {/* <Temp /> */}
        <Creatures />
    </>
}

export default App