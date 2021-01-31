import { createAction } from '@reduxjs/toolkit'
import shortid from 'shortid'

const handleAddContact = createAction("app/handleAddContact", (name, number) => ({
  payload: { id: shortid.generate(), name, number },
}));

const handleRemoveContact = createAction("app/handleRemoveContact");
const handleFilterChange = createAction("app/handleFilterChange");

const exportModule = {
  handleAddContact,
  handleRemoveContact,
  handleFilterChange,
};

export default exportModule;