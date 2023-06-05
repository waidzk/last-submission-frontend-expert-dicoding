/* eslint-disable no-console */
import RestaurantSource from "../../data/restaurant-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
    <section class="hero">
      <div class="heroImage">
          <img src="/images/hero.jpg" alt="hero image">
      </div>
      <div class="heroContent">
          <h1 class="heroTitle"><span class="explore-text">Explore</span><br/>The Indonesia Restaurants</h1>
          <p class="heroTagline">Lorem ipsum dolor sit amet consectetur.<br/>Non nunc mauris quam amet orci.</p>
          <a href="#" class="searchButton">Search</a>
      </div>
      <div class="pil-items">
        <div class="pil-item pil-1">
          <img src="/images/icons/resto-icon.svg" alt="">
          <span class="pil-text">+32 Best Restaurants</span>
        </div>
        <div class="pil-item pil-2">
          <img src="/images/icons/foods-icon.svg" alt="">
          <span class="pil-text">+5000 Indonesian Foods</span>
        </div>
        <div class="pil-item pil-3">
          <img src="/images/icons/gps-icon.svg" alt="">
          <span class="pil-text">+30 Provinces</span>
        </div>
      </div>
    </section>

    <section id="maincontent">
      <div class="bodycontent">
        <h1 class="title-section">Best Restaurants</h1>
        <div id="restaurant-list"></div>
      </div>
    </section>

    <section id="recommended-section">
    <h1 class="title-section">Recommended Section</h1>
      <div class="recommended-food">
        <div class="recommended-image">
          <img src="/images/recommended-image.png" alt="recommended image">
        </div>
        <div class="recommended-info">
          <h3 class="title">The Most Delicious Food In The World!</h3>
          <h4 class="food-name">Rendang</h4>
          <p class="food-desc">This typical Minang dish has also become one of Indonesia's culinary delights popular in foreign countries and can be found in Padang Restaurants around the world. Even rendang has been named the world's number 1 most delicious food.</p>
        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantContainer = document.querySelector("#restaurant-list");
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
