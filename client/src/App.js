import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateScoutingReport from "./components/create";
import BrowseScoutingReports from './components/browse';


const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<BrowseScoutingReports/>} /> 
      <Route exact path='/create' element={<CreateScoutingReport/>} /> 
    </Routes>
  )
};

export default App;
