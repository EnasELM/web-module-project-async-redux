import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchError, getPerson } from './../actions';

const Person = ({ person, isFetching, error, dispatch }) => {

  useEffect(()=> {
    dispatch(getPerson());
  }, []);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching a name</h2>;
  }


  const handleClick = () => {
    dispatch(getPerson());
   
  }
  console.log(person.age)

  return (
    <>
      <div>
        <h2>Say Hi to: {person.age} {person.count}</h2>
       
      </div>
      <button onClick={handleClick}>Get new person</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    person: state.person,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps)(Person);