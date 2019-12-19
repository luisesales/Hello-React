import React from 'react';
import logo from './logo.svg';
import './App.css';

function TarefaLista(props){
  render(){
      const title = props.title //=> const {title} = this.props; 
      const data = props.data; // => const {data} = this.props;  => const {title,data} = this.props;   
      return(
        <div>
          <p>{title}</p>
          <ul>
            {data.map((item) => <li>{item}</li>)}
          </ul>
        </div>
      );
  }
};

const Tarefa = (props) => {
  return (
  <div>
    <p>{props.title}</p>
    <input type="text"></input>
    <button type="submit">Criar Nova Tarefa</button>
  </div>
  );
}

onChangeText(){
  this.setState
}

class App extends React.Component {
  
    state = {Tarefas :[
      "Aula sobre Componentes",
      "Aula sobre propriedades e estado",
      "Outra Aula sobre UI"  
    ],
    text : ""
  }
    render(){
      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TarefaLista data={this.state.Tarefas}/>    
          <Tarefa title={this.state.text} onChange="onChangeText()"/>   
        </header>
      </div>
    );
  }
}

export default App;
