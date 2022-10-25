// import logo from './logo.svg';
import './App.css';
import {RouterProvider} from 'react-router-dom'
import {router} from './routes/Routes'
// import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
         
      </RouterProvider>
    </div>
  );
}

export default App;
