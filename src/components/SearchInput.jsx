import "./SearchInputStyle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchInput() {
  return (
    <div className="search">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      <input
        className="search-field"
        type="text"
        placeholder="Search or start new chat"
      />
    </div>
  );
}
