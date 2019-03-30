import axios from 'axios';

const saveOrderToDB = order => {
  axios
    .post('http://127.0.0.1:3000/api/orders', order)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};

module.exports = {
  saveOrderToDB,
};
