import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import SearchBox from "./components/SearchBox";
import ContactList from "./components/ContactList";

// import { object, string, number, date } from "yup";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("saved contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    } else {
      return initialContacts;
    }
  });

  const [filter, setFilter] = useState("");
  const addContacts = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };
  const deleteContacts = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };
  const handleFilterChange = (evt) => {
    setFilter(evt.target.value);
  };
  const filtredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  useEffect(() => {
    localStorage.setItem("saved contacts", JSON.stringify(filtredContacts));
  }, [filtredContacts]);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContacts={addContacts} />
      <SearchBox handleFilterChange={handleFilterChange} value={filter} />
      <ContactList contacts={filtredContacts} deleteContacts={deleteContacts} />
    </>
  );
}

export default App;
