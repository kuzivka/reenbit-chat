import avatar from '../images/avatar.jpg';
import Icon from './Icon';
import SearchInput from './SearchInput';
import './ContactListHeaderStyle.scss'

export default function ContactListHeader(props){
    const {setFilter} = props;
    return(
        <div className='contact-list-header'>
            <Icon active src={avatar} />
            <SearchInput setFilter={setFilter} />
        </div>
    )
}