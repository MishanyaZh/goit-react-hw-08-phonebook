import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getValue } from '../redux/contact-app/contact-selector';
// import { connect } from 'react-redux';
import contactActions from '../redux/contact-app/contact-actions';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const value = useSelector(getValue);

  const onChange = e => dispatch(contactActions.changeFilter(e.target.value));

  return (
    <label htmlFor={value.id} className={css.filter}>
      <p className={css.filterName}>Find contacts by name</p>
      <input
        id={uuidv4()}
        className={css.input}
        value={value}
        onChange={onChange}
        type="text"
        name="filter"
        placeholder="find"
        autoComplete="off"
      />
    </label>
  );
};

// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(contactActions.changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
