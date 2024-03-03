import css from "../SearchBox/SearchBox.module.css"
export default function SearchBox({ value, onSearch }) {
    return (
        <div className={css.search}>
            <p>Find contacts by name </p>
            <input  className={css.input} type="text" value={value} onChange={(e)=>onSearch(e.target.value)}/>
    </div>
)
}