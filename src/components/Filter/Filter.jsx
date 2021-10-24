import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import { getFilter } from '../../redux/phonebook/phonebook-selector';

import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const value = useSelector(getFilter);

  const onChangeFilter = e => dispatch(changeFilter(e.target.value));

  return (
    <label htmlFor="filter" className={css.filter}>
      <p className={css.filterName}>Find contacts by name</p>
      <input
        className={css.input}
        value={value}
        onChange={onChangeFilter}
        type="text"
        name="filter"
        placeholder="find"
        autoComplete="off"
      />
    </label>
  );
};

export default Filter;
