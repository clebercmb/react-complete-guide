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
    this.setState({showUsers: !doesShow});
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I´m a person with </h1>
        <button onClick={this.toggleUsersHandler}>Toggle Users </button>
        {this.state.showUsers ? 
          <div>
            <Person />
            <User
              id={this.state.users[0].id}
              nome={this.state.users[0].nome}
              email={this.state.users[0].email}
              telefone={this.state.users[0].telefone}
              sexo={this.state.users[0].sexo}
              click={this.switchNameHadler.bind(this, 'Pim pirim pim pim')} />
            <User
              id={this.state.users[1].id}
              nome={this.state.users[1].nome}
              email={this.state.users[1].email}
              telefone={this.state.users[0].telefone}
              sexo={this.state.users[1].sexo}
              click={this.switchNameHadler.bind(this, 'Domingas Roncoleta')}
              changed={this.nameChangeHadler}> Teste </User>
          </div> : null
        }
      </div>
    );
  }
}

export default App;
