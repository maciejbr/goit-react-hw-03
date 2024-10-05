import styles from "./ContactList.module.css";
import Contact from "./Contact";

const ContactList = ({ contacts, deleteContacts }) => {
  return (
    <>
      <h2>ContactList:</h2>
      <div className={styles.phoneList}>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            deleteContacts={deleteContacts}
          />
        ))}
      </div>
    </>
  );
};

export default ContactList;
