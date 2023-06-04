/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import addNewReview from '../../utils/add-review';

const Detail = {
  async render() {
    return `
        <article id="detail-restaurant"></article>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.restaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#detail-restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    });

    const listFoodMenu = document.querySelector('#food-menu');
    const listDrinkMenu = document.querySelector('#drink-menu');
    const { foods, drinks } = restaurant.restaurant.menus;
    foods.forEach((food) => {
      listFoodMenu.innerHTML += `<li class="foodItem">${food.name}</li>`;
    });
    drinks.forEach((drink) => {
      listDrinkMenu.innerHTML += `<li class="foodItem">${drink.name}</li>`;
    });

    const reviewRestaurant = document.querySelector('#review-restaurant');
    const reviews = restaurant.restaurant.customerReviews;
    reviews.forEach((review) => {
      reviewRestaurant.innerHTML += `
        <section class="review-box">
          <div class="review-head">
            <h3 class="reviewName">${review.name}</h3>
            <p class="reviewDate">${review.date}</p>
          </div>
          <div class="review-body">
            <p>${review.review}</p>
          </div>
        </section>
      `;
    });

    const addNewReviewContainer = document.querySelector('#add-new-review');
    addNewReviewContainer.innerHTML = `
      <fieldset>
        <legend>Add Your Review</legend>
        <p>
            <label for="nameReviewer-input">Name</label>
            <input id="nameReviewer-input" type="text" name="name" placeholder="your name .." value="">
        </p>
        <p>
            <label for="descriptionReview-input">Review</label>
            <input id="descriptionReview-input" type="text" name="review" placeholder="your review .." value="">
        </p>
        <p>
            <input id="sendReview-input" type="submit" name="send" value="send">
        </p>
      </fieldset>
    `;
    const sendReview = document.querySelector('#sendReview-input');
    sendReview.addEventListener('click', () => {
      const nameReviewer = document.querySelector('#nameReviewer-input').value;
      const descriptionReview = document.querySelector('#descriptionReview-input').value;
      const restaurantID = restaurant.restaurant.id;
      addNewReview.addNewReviewFunction(nameReviewer, descriptionReview, restaurantID);
    });
  },
};

export default Detail;
