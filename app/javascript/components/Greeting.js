import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetings } from '../Redux/greetings/greetingsSlice';

const GreetingsComponent = () => {
  const { greetings, loading, error } = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!greetings || greetings.length === 0) {
    return <p>No greetings available</p>;
  }

  const randomIndex = Math.floor(Math.random() * greetings.length);
  const randomGreeting = greetings[randomIndex].content;

  return (
    <div>
      <h1>Greetings</h1>
      <p>{randomGreeting}</p>
    </div>
  );
};

export default GreetingsComponent;
