import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Output from './components/Output';
import Select from './components/controls/Select';
import Text from './components/controls/Text';
class App extends Component {

  constructor(props){
    super()
    this.state={
      paras: 4,
      format: true,
      text: ''
    }
  }

  componentDidMount(){
    this.getText()
  }

  getText(){
    
    //axios.get('http://hipsterjesus.com/api?paras='+this.state.paras+'&html='+this.state.html)
    axios.get('https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=html')
      .then((response) => {
        this.setState({text: response.data}, function(){
          console.log(this.state)
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  showFormat(x){
    this.setState({format: x}, this.getText)
  }

  changeParas(number){
    this.setState({paras: number}, this.getText)
  }


  render() {
    return (
      <div className="App container">
        <h1>Text Generator</h1>
        <hr />
        <form className="form-inline">
          <div className="form-group">
          <label>Include HTML/format:</label>
          <Select value={this.state.format} onChange={this.showFormat.bind(this)}/>
          </div>
          <div className="form-group">
          <label>Paragraphs:</label>
          <Text value={this.state.paras} onChange={this.changeParas.bind(this)}/>
          </div>
        </form>
        <Output value={this.state.text}/>
      </div>
    );
  }
}

export default App;
