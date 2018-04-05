import React from 'react';
import propTypes from 'proptypes';
import ajax from './ajax';

const Start = (props) => {
  const beginCheckout = () => {
    ajax.post()
      .then((data) => {
        props.set({
          curTransaction: data['_id'], // eslint-disable-line
          start: true,
        });
      });
  };

  return (
    <button onClick={beginCheckout}>
      Begin Checkout!
    </button>
  );
};

module.exports = Start;

Start.propTypes = {
  set: propTypes.func.isRequired,
};
