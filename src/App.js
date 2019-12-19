import React from 'react';
import logo from './logo.svg';
import './App.css';

function TarefaLista(props){  
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

const Tarefa = (props) => {
  return (<form onSubmit={props.onSubmit}>
    <p>{props.title}</p>
    <input
      type="text" 
      value={props.text} 
      onChange={props.onChange}
    />
    <button type="submit">
        Criar nova tarefa
    </button>
  </form>);
}



class App extends React.Component {
  state = {Tarefas :[
    "Aula sobre Componentes",
    "Aula sobre propriedades e estado",
    "Outra Aula sobre UI"  
  ],
  text : "Nova Tarefa"
}

  onChangeText(event){
    this.setState({text : event.target.value});
  }
  
  addTask() {
    const {Tarefas, text} = this.state;
    Tarefas.push(text);
    this.setState({
      Tarefas: Tarefas,
      text: "Texto da nova tarefa"
    })
  }
    
    // constructor(props) {
    //   super(props);
    //   this.state = [];
    // }
    render(){
      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TarefaLista data={this.state.Tarefas}/>    
          <Tarefa title={"Minha Lista de Tarefas"} text={this.state.text} onChange={(event) => this.onChangeText(event)} onSubmit={(event) => {
            event.preventDefault();
            this.addTask();
          }} />   
        </header>
      </div>
    );
  }
}

export default App;
