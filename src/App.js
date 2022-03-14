
import './App.css';
import { Add } from './components/add';
import {Provider} from 'react-redux';
import { store } from './redux/store';
import { Todo } from './components/list';
import {BrowserRouter} from "react-router-dom";
import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Provider store={store}>
      <BrowserRouter>
   
      {/* <Add/> */}
        <Routes>
          <Route path='/' element={<Add/>}></Route>
          <Route path='/display' element={<Todo/>}></Route>
      
        </Routes>
      
    </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
