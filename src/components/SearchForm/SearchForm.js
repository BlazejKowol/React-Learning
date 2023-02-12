import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchInput } from '../../redux/store';

const SearchForm = () => {

    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(searchInput(search));
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput onChange={e => setSearch(e.target.value)} placeholder="Search..."/>
            <Button>
                <span className='fa fa-search'/>
            </Button>
        </form>
    );
  };

  export default SearchForm;