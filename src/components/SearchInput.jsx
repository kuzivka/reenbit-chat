import "./SearchInputStyle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchInput(props) {
  const { setFilter } = props;

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <div className="search">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      <input
        onChange={handleChange}
        className="search-field"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}
