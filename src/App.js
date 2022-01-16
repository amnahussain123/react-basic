import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import AddContact from './components/AddContact';
import ViewContact from './components/ViewContact';
import api from './api/login';

function App() {
  const [contacts, setContacts] = useState([]);

  const login = async ()=>{
      const response = await api.get('api/admin/all-users');
      return response.data;
  }
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  };
  useEffect(() => {
    const retrieve = JSON.parse(localStorage.getItem("contacts"));
    if (retrieve) setContacts(retrieve);
    // const loginView = async ()=>{
      
    //   const view = await login();
    //   if (view) setContacts(view);

    // };
    // loginView();
  }, []);
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<ViewContact viewList={contacts} />} />
          <Route exact path='/add' element={<AddContact addContactHandler={addContactHandler} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
