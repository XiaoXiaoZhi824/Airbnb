import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchEntireData } from '@/store/modules/entire';
import { EntireWrapper } from './style';
import Filter from './components/Filter';
import List from './components/List';
import Pagination from './components/Pagination';

const Entire = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEntireData());
  }, [dispatch]);
  return (
    <section>
      <EntireWrapper>
        <Filter />
        <List />
        <Pagination />
      </EntireWrapper>
    </section>
  );
});

export default Entire;
