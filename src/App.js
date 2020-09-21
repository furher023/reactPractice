import React, {Component} from 'react';
import Main from './components/Main';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom'; // Necessary for routing
import{ConfigureStore} from './redux/ConfigureStore' //Importing store 
import {Provider} from 'react-redux'; // Pass the store as props for all components to access

const store = ConfigureStore();

class App extends Component {
  
  render() {
    return(
      <Provider store={store} >
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
