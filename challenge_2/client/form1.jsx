import React from 'react';
import propTypes from 'proptypes';
import ajax from './ajax';

const Form1 = (props) => {
  const nextForm = () => {
    const request = {
      transId: props.transId,
      fullName: document.getElementById('fullName').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    };

    ajax.put(request)
      .then(() => {
        props.set({
          f1: true,
        });
      });
  };

  return (
    <div>
      <form>
        Full Name:  <input type="text" id="fullName" />
        <br />
        Email: <input type="text" id="email" />
        <br />
        Password: <input type="text" id="password" />
        <br />
        <div className="buttonBox">
          <button type="button" onClick={nextForm}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

module.exports = Form1;

Form1.propTypes = {
  set: propTypes.func.isRequired,
  transId: propTypes.string.isRequired,
};
