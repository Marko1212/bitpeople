import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './Main';
import { extname } from 'path';
import { HashRouter } from "react-router-dom"
/* import { ReactComponent } from '*.svg'; */



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isGrid: false

    }

  }
  refresh = () => {

    this.setState(prevState => {
      return {
        isGrid: prevState.isGrid
      }
    })


  }

  changeLayout = () => {
    this.setState(prevState => {
      return {
        isGrid: !prevState.isGrid
      }
    })

  }

  render() {
    return <>
      <Header changeLayout={this.changeLayout} refresh = {this.refresh} />
      <Main isGrid={this.state.isGrid} />
      <Footer />

    </>
  }
}




export default App;