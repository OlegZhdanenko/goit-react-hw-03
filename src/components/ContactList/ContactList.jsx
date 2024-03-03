import Contact from "../Contact/Contact.jsx"
import css from "../ContactList/ContactList.module.css"
export default function ContactList({ Phonebook, onDelete }) {
    
    return (
        <ul className={css.list}>
            {
                Phonebook.map((item) =>
                    <li key={item.id}>
                        <Contact data={item} onDelete={onDelete} />
                </li>)
            }
        </ul>
    )
}