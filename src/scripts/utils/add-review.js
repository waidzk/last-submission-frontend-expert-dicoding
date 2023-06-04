/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */

const addNewReview = {
  addNewReviewFunction(nameReviewer, descriptionReview, idRestaurant) {
    const dataReview = {
      id: idRestaurant,
      name: nameReviewer,
      review: descriptionReview,
    };
    fetch('https://restaurant-api.dicoding.dev/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '12345',
      },
      body: JSON.stringify(dataReview),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        history.go(0);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  },
};

export default addNewReview;
