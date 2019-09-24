import React, {Component} from 'react';

class MeuBtn extends Component{
    render(){
      //console.log(this.props);  fazer log das mudanças 
      return <button onClick={()=>this.props.troca(this.props.text)}>{this.props.text}</button>
    }
}

class MeuTitulo extends Component{
  render(){
    return <h2>Vc clicou no {this.props.title}</h2>
  }
}

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      btnAtual: ''
    }
  }

  //função de seta
  trocaTitulo = (nome) =>{
    //função paralela
    this.setState({
      btnAtual: nome
    })
  }
    
    render(){
      return(
        <>
         <MeuTitulo title={this.state.btnAtual}/>
         <MeuBtn troca={this.trocaTitulo} text="Botao 01"/>
         <MeuBtn troca={this.trocaTitulo} text="Botao 02"/>
         <MeuBtn troca={this.trocaTitulo} text="Botao 03"/>
        </>
      )
    }
}