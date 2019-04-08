import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import User from './User/User'

class App extends Component {
  state = {
    users: [
      { id: '1', nome: 'Cleber M Barbosa', email: 'cleber@gmail.com', telefone: '11983419065', sexo: 'M' },
      { id: '2', nome: 'Camila Mirada Barbosa', email: 'cleber@gmail.com', telefone: '11984510707', sexo: 'F' }
    ],
    otherState: 'some other value',
    showUsers: false
  }

  switchNameHadler = (newName) => {
    console.log('Was clicked')
    this.setState({
      users: [
        { id: '1', nome: 'Cleber M Barbosa', email: 'cleber@gmail.com', telefone: '11999999999', sexo: 'M' },
        { id: '4', nome: newName, email: 'domingas@gmail.com', telefone: '11984510707', sexo: 'F' }

      ]
    }
    )

  }

  nameChangeHadler = (event) => {
    console.log('Was clicked')
    this.setState({
      users: [
        { id: '1', nome: 'Cleber M Barbosa', email: 'cleber@gmail.com', telefone: '11999999999', sexo: 'M' },
        { id: '4', nome: event.target.value, email: 'camila@gmail.com', telefone: '11984510707', sexo: 'F' }

      ]
    }
    )

  }

  toggleUsersHandler = () => {
    const doesShow = this.state.showUsers;
    this.setState({ showUsers: !doesShow });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let users = null;

    if (this.state.showUsers) {
      users = (
        <div>
          {this.state.users.map(user => {
            return <User 
              id={user.id}
              nome={user.nome}
              email={user.email}
              telefone={user.telefone}
              sexo={user.sexo} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I´m a person with </h1>
        <button
          style={style}
          onClick={this.toggleUsersHandler}>Toggle Users </button>
        {users}
      </div>
    );
  }
}

export default App;
