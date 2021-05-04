
import logo from './logo.svg';
import './App.css';
import data from "./contacts.json";
import React, { useState } from 'react'

function App() {

  const [contacts, updateContacts] = useState(data.slice(0, 5))
  let [random] = useState(data)

  const handleRandom = () => {

    let randomIndex = Math.floor(Math.random() * contacts.length)
    let elem = random[randomIndex]
    updateContacts([elem, ...contacts])

  }



  const handleSortName = () => {
    let clonedPeople = JSON.parse(JSON.stringify(contacts))

    clonedPeople.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      }
      else if (a.name < b.name) {
        return -1
      }
      else {
        return 0
      }
    })

    updateContacts(clonedPeople)
  }

  const handleSortPop = () => {
    let clonedPeople = JSON.parse(JSON.stringify(contacts))

    clonedPeople.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1
      }
      else if (a.popularity < b.popularity) {
        return 1
      }
      else {
        return 0
      }
    })

    updateContacts(clonedPeople)
  }


  const handleDelete = (id) => {

    console.log(id)
    let filteredContacts = contacts.filter((singleVip) => {
      return singleVip.id !== id
    })

    updateContacts(filteredContacts)
  }

  return (
    <div>
      <thead>
        <tr>
          <th><button className="myBtn" onClick={handleRandom} >Add Random</button></th>
          <th><button className="myBtn" onClick={handleSortName} >Sort by name</button></th>
          <th><button className="myBtn" onClick={handleSortPop} >Sort by popularity</button>
          </th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
      </thead>
      {
        contacts.map((oneContact, index) => {

          let deciPopularity = oneContact.popularity.toFixed(2)
          return <table>
            <tbody>
              <tr key={index}>
                <th><img style={{ height: '70px' }} src={oneContact.pictureUrl} /></th>
                <th>{oneContact.name}</th>
                <th>{deciPopularity}</th>
                <th><button className="myBtn" onClick={() => { handleDelete(oneContact.id) }}>Delete</button></th>
              </tr>
            </tbody>
          </table>
        })

      }

    </div>
  );
}

export default App;
