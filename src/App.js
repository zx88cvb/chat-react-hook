import { renderRoutes } from "react-router-config";
import { BrowserRouter } from 'react-router-dom';
import routers from "./routers";
import { GlobalStyle } from './reset';
import { CommonStyle } from './assets/global-style';

import { Provider } from 'react-redux';
import store from '@/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <CommonStyle />
      <BrowserRouter>
        <div className="App">   
          {renderRoutes(routers)}
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
