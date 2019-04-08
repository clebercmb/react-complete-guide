import React, { Component } from 'react';
import './App.css';
import User from './User/User'

class App extends Component {
  state = {
    users: [
      { id: '0', nome: 'Cleber M Barbosa', email: 'cleber@gmail.com', telefone: '11983419065', sexo: 'M' },
      { id: '1', nome: 'Camila Miranda Barbosa', email: 'camila@gmail.com', telefone: '11984510707', sexo: 'F' }
    ],
    otherState: 'some other value',
    showUsers: false
  }

 
  nameChangeHadler = (event, id) => {
    console.log('nameChangeHadler was requested!');
    const userIndex = this.state.users.findIndex(p => {
      return p.id === id;
    });
  
    const user = {
      ...this.state.users[userIndex]
    };
 
    user.nome = event.target.value;
    const users = [...this.state.users];
    users[userIndex] = user;
 
    this.setState({ users: users })
  }


  deleteUserHandler = (userIndex) => {
    const users = [...this.state.users];
    users.splice(userIndex, 1);
    this.setState({ users: users })
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
          {this.state.users.map((user, index) => {
            return <User
              click={() => this.deleteUserHandler(index)}
              nome={user.nome}
              email={user.email}
              telefone={user.telefone}
              sexo={user.sexo}
              key={user.id}
              changed={ (event) => this.nameChangeHadler(event, user.id) }
         />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>User List  </h1>
        <button
          style={style}
          onClick={this.toggleUsersHandler}>Toggle Users </button>
        {users}
      </div>
    );
  }
}

export default App;
