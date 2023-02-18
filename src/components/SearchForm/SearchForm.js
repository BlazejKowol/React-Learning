import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { searchInput } from '../../redux/store';
import { getSearch } from '../../redux/store';

const SearchForm = () => {

    const defaultSearch = useSelector(getSearch);

    const [search, setSearch] = useState(defaultSearch);
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(searchInput(search));
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..."/>
            <Button>
                <span className='fa fa-search'/>
            </Button>
        </form>
    );
  };

  export default SearchForm;