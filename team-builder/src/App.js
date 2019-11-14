import React, {useState} from 'react';
import logo from './logo.svg';
import MemberForm from './MemberForm';
import Members from './Members'
import './App.css';

function App() {
  const [team, setTeam] = useState([
    {
      id: 0,
      MemberName: '',
      MemberEmail: '',
      MemberRole: ''
    }
  ]);

  const [memberToEdit] = useState();

  const addTeamMember = member => {
    const newMember = {
      id: Date.now(),
      MemberName: member.MemberName,
      MemberEmail: member.MemberEmail,
      MemberRole: member.MemberRole
    };
    setTeam([...team, newMember])
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <MemberForm addTeamMember={addTeamMember}/>
        <Members team={team}/>
      </div>
    </div>
  );
}

export default App;
