import styles from "./Contact.module.css";

const Contact = ({ id, name, number, deleteContacts }) => {
  return (
    <>
      <div className={styles.form}>
        <div className={styles.personData} key={id} id={id}>
          <h4> {name}</h4>
          <p>☎ {number}</p>
        </div>
        <button onClick={() => deleteContacts(id)}>Delete</button>
      </div>
    </>
  );
};

export default Contact;
