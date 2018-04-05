import React from 'react';
import propTypes from 'proptypes';
import ajax from './ajax';

const Form2 = (props) => {
  const nextForm = () => {
    const request = {
      transId: props.transId,
      address1: document.getElementById('address1').value,
      address2: document.getElementById('address2').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      shipZip: document.getElementById('shipZip').value,
      phone: document.getElementById('phone').value,
    };

    ajax.put(request)
      .then(() => {
        props.set({
          f2: true,
        });
      });
  };

  return (
    <div>
      <form>
        Address (line 1):  <input type="text" id="address1" />
        <br />
        Address (line 2): <input type="text" id="address2" />
        <br />
        City: <input type="text" id="city" />, State: <input type="text" id="state" /> Zip: <input type="text" id="shipZip" />
        <br />
        Phone: <input type="text" id="phone" />
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

module.exports = Form2;

Form2.propTypes = {
  set: propTypes.func.isRequired,
  transId: propTypes.string.isRequired,
};
