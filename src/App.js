import React from 'react';
import {Route , BrowserRouter} from 'react-router-dom';
import Header from './shared/header/header';
import Home from './pages/home/home';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Route path='/' component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
