import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actions from '../../redux/contacts/contact-actions';
import {getItems} from '../../redux/contacts/contact-selectors'
import s from './ContactForm.module.css'

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

  const handleChangeForm = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const isValidatedForm = validatedForm();
    if (!isValidatedForm) return;
    dispatch(actions.handleAddContact(name, number));

    setName('');
    setNumber('');
  };

  const validatedForm = () => {
    if (!name || !number) {
      alert("Some filed is empty");
      return;
    }
      const isExistContact = !!contacts.find(contact => contact.name === name);
    isExistContact && alert("Contact is already exist!");
    
      return !isExistContact;
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className={s.inputForm}>
          <h3 className={s.dataInput}>Name</h3>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={handleChangeForm}
          />
          <h3 className={s.dataInput}>Number</h3>
          <input
            type="tel"
            name="number"
            placeholder="Enter phone number"
            value={number}
            onChange={handleChangeForm}
          />
          <div>
            <button className={s.addContact} type="submit">
              Add contact
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
