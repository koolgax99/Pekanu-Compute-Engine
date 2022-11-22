import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Dashboard from './Components/Dashboard'
import CreateTask from './Components/CreateTask'
import Navbar from './Components/Navbar'

// React Router App

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-task" element={<CreateTask />} />
      </Routes>
    </Router>
  )
  }

export default App