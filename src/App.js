import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

export const rolesAsObj = {
  backend: 'backend engineer',
  frontend: 'frontend engineer',
  ux: 'designer',
  proj: 'project manager',
  sre: 'site reliability engineer',
  devops: 'devops engineer',
  prod: 'product manager',
}
export const roles = [
  { id: 'backend', display: 'backend engineer' },
  { id: 'frontend', display: 'frontend engineer' },
  { id: 'ux', display: 'designer'},
  { id: 'proj', display: 'project manager' },
  { id: 'sre', display: 'site reliability engineer' },
  { id: 'devops', display: 'devops engineer' },
  { id: 'prod', display: 'product manager' },
]

const membersData = [
  {name: 'Anthony K', email: 'anthony@gmail.com', role: roles.backend},
  {name: 'Michael P', email: 'michael@gmail.com', role: roles.frontend},
  {name: 'Tucker J', email: 'tucker@gmail.com', role: roles.proj},
]


function App() {

  const [members, setMembers] = useState([])



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a> */}
      </header>
      <section className="team-list">
        <h2>
          Team Members
        </h2>

        <MemberForm roles={roles} />

      </section>
    </div>
  );
}

export function MemberForm(props) {

  return (
    <form>
      <label>Full Name
        <input
          name='fullName'
          value=''
          onChange=''
        />
      </label>
      <label>E-mail
        <input
          name='email'
          value=''
          onChange=''
        />
      </label>
      <label>Role
        <select name='roles'>
          <option value=''>-- Please choose an option --</option> 
          {props.roles.map(item => (
          <option value={item.id}>{item.display}</option>)
          )}
        </select>
      </label>
    </form>
  )
}



export default App;
