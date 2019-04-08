import React from 'react';
import './User.css';

const user = (props) => {
    
    return (
        <div className="User">
            <p onClick={props.click}>{props.nome}</p>
            <p>{props.email}</p>
            <p>{props.telefone}</p>
            <p>{props.sexo}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.nome}/>
         </div>
    )
};

export default user;