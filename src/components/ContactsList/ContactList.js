import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../redux/contacts/contact-actions'
import {getVisibleContacts} from '../../redux/contacts/contact-selectors'
import PropTypes from 'prop-types'

const ContactListItem = ({
  contact: { id, name, number},
}) => {
  const dispatch = useDispatch();
  return (
    <li>
      {name}: {number}{" "}
      <button onClick={() => dispatch(actions.handleRemoveContact(id))}>
        delete
      </button>
    </li>
  );
};

const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      number: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
  on: PropTypes.func.isRequired,
};

export default ContactsList;
