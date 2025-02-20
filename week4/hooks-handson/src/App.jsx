import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    //initializing the state
    const [todos, setTodo] = useState({
        title: "Gym", description: "Workout from 5pm to 7pm",
    })
    //Have a setInterval that changes state of the component every sec
    //but make sure to use a hook that protects setInterval function itself being called infinitely because of continuous re-rendering
    useEffect(() => {
        console.log("setInterval is about to be called");
        setInterval(()=>{
            console.log(`State value will be changed ${Math.random()}`, 1000)
            setTodo({
                title: "study",
                description: "study from 5pm to 7pm"
            })
        }, 1000)
    }, []);



    return (<>
        <h1>{todos.title}</h1>
        <h2>{todos.description}</h2>
    </>)
}

export default App
