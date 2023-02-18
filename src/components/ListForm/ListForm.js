import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';

const ListForm = props => {

  const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [listId] = useState(props.listId);
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description, listId}));
        setTitle('');
        setDescription('');
      };

    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}> 
          <span className={styles.formTitle}>Title:</span><TextInput value={title} onChange={e => setTitle(e.target.value)} />
          <span className={styles.formTitle}>Description:</span><TextInput value={description} onChange={e => setDescription(e.target.value)} />
          <Button>Add list</Button>
        </form>
    );
};

export default ListForm;