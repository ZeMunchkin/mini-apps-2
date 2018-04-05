import $ from 'jquery';

module.exports = {
  get: (callback) => {
    $.get({
      url: '/data',
      'Content-Type': 'application/json',
      success: (data) => {
        callback(data);
      },
    });
  },
};
