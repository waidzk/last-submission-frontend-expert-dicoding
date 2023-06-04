/* eslint-disable no-empty-function */
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
    <section id="favoriteContent">
      <h1 class="sub-title">Favorite Restaurant</h1>
      <div id="favorite-restaurant-list">
      </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#favorite-restaurant-list');
    if (!restaurants.length) {
      restaurantsContainer.innerHTML = `
      <section class="nothingSection">
        <h2 class="info-nothingLiked">You haven't added the restaurant you like</h2>
        <img class="nothing-image" alt="nothing favorite restaurant" src="/images/undraw_Add_notes_re_ln36.svg">
      </section>
      `;
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Favorites;
