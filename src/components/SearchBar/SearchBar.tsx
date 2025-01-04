import s from './SearchBar.module.css';
import { GrSearch } from 'react-icons/gr';
import React, { FormEvent } from 'react';
import { FormElements, SearchBarProps } from './SearchBar.types';

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const elements = evt.currentTarget.elements as FormElements;
    onSearch(elements.form.value);
    evt.currentTarget.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit} className={s.searchForm}>
        <input
          name="form"
          className={s.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={s.searchButton} type="submit">
          <GrSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
