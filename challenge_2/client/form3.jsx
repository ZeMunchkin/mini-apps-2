import React from 'react';
import propTypes from 'proptypes';
import ajax from './ajax';

const Form3 = (props) => {
  const nextForm = () => {
    const request = {
      transId: props.transId,
      ccNum: document.getElementById('ccNum').value,
      expiration: document.getElementById('expiration').value,
      cvv: document.getElementById('cvv').value,
      ccZip: document.getElementById('ccZip').value,
    };

    ajax.put(request)
      .then(() => {
        props.set({
          f3: true,
        });
      });
  };

  return (
    <div>
      <form>
        Credit Card Number:  <input type="text" id="ccNum" />
        <br />
        Expiration: <input type="text" id="expiration" /> CVV: <input type="text" id="cvv" /> Zip: <input type="text" id="ccZip" />
        <br />
        <br />
        <button type="button" onClick={nextForm}>
          Next
        </button>
      </form>
    </div>
  );
};

module.exports = Form3;

Form3.propTypes = {
  set: propTypes.func.isRequired,
  transId: propTypes.string.isRequired,
};
