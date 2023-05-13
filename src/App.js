import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import TodoList from './pages/todos/TodoList';
import TodoItem from './pages/todos/TodoItem';


function App() {

  return (
    <React.Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <Router>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/todos">Todos</Link></li>
              </ul>
            </nav>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/todos' element={<TodoList />} />
                <Route path='/todos/:id' element={<TodoItem />} />
              </Routes>
            </Router>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
