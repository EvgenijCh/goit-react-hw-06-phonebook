import React from "react";
import ContactForm from "./components/ContactForm";
import ContactsList from "./components/ContactsList";
import Filter from "./components/Filter";
import s from './App.module.css'


export default function App() {
  return (
    <>
      <h1 className={s.titleSections}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.titleSections}>Contacts</h2>
      <p>Find contacts by name</p>
      <Filter />
      <ContactsList />
    </>
  );
}

