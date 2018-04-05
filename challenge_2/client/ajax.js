import $ from 'jquery';

const ajax = {
  post: () => (
    $.post({
      url: '/',
      contentType: 'application/json',
      data: {},
    })
  ),
  put: request => (
    $.ajax({
      url: '/',
      method: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify(request),
    })
  ),
};

export default ajax;
