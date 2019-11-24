import fetch from 'unfetch';

const checkStatus = (response: any): any => {
  if (response.ok) {
    return response;
  } else {
    const error = new Error(response.statusText);
    return Promise.reject(error);
  }
};

fetch('http://localhost:8080/articles')
  .then(checkStatus)
  .then(response => response.json())
  .then(data => console.log(data));
