import {useState} from "react";

import Title from "./components/Title/Title.js/Title.js";

const sample = [1, 2, 3, 4, 5]

// map -> []
const mapSample = sample.map(item => {
    return item * 2
})
// filter -> [] Delete
const filterSample = sample.filter(item => {
    return item % 2 !== 0
})
// concat -> [] Create
const concatSample = sample.concat([6, 7, 8, 9, 10])
// reduce -> ?
const reduceSample = sample.reduce((pre, cur, idx) => {
    return pre + cur
}, 0)


function AppBk() {
    // API Fetching
    const [person, setPerson] = useState(['John'])
    const [name, setName] = useState('')
    const [preUpdateName, setPreUpdateName] = useState('')
    const [updateName, setUpdateName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        // TODO: 1. person push
        setPerson(person.concat(name))

        // TODO: 2. setName => name = ''
        setName('')
    }

    const updateHandleSubmit = (e) => {
        e.preventDefault()

        setPerson(person.map(item =>{
            if(item === preUpdateName){
                return updateName
            }else{
                return item
            }
        }))

        setUpdateName('')
    }

    // delete
    const handleDelete = (name) => {
        setPerson(person.filter(item => item !== name))
    }

    //update
    const handleUpdate = (name) => {
        setPreUpdateName(name)
        setUpdateName(name)
    }

    return (
        <div>
            <ul>
                {
                    person.map(item => <li>{item}
                        <button onClick={() => handleUpdate(item)}>update</button>
                        <button onClick={() => handleDelete(item)}>delete</button>
                    </li>)
                }
            </ul>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text"
                           name="name"
                           value={name}
                           onChange={(e) => {
                               setName(e.target.value)
                           }}/>
                </form>
            </div>
            <div>
                <form onSubmit={updateHandleSubmit}>
                    <label>Update Name</label>
                    <input type="text" name="updateName"  value={updateName} onChange={(e) => {
                        setUpdateName(e.target.value)
                    }}/>
                </form>
            </div>
            <Title />
        </div>
    );
}

export default AppBk;
