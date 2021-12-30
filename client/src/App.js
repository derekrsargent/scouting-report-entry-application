import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateScoutingReport from "./components/create";
import BrowseScoutingReports from './components/browse';
import EditScoutingReport from './components/edit';


const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<BrowseScoutingReports/>} /> 
      <Route exact path='/create' element={<CreateScoutingReport/>} /> 
      <Route exact path='/edit' element={<EditScoutingReport/>} /> 
    </Routes>
  )
};

export default App;
