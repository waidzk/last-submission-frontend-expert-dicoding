import CONFIG from "../../globals/config";

const createRestaurantDetailTemplate = (restaurant) => `
    <section id="restaurantImage">
        <div class="restaurantImageClass lazyload" data-bgset="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}"></div>  
    </section>

    <section id="restaurantDetail">
        <div class="restaurantDetailClass">
            <div class="head-restaurantDetail">
                <div>
                    <h2 class="restaurant-name-detail">${restaurant.name}</h2>
                    <p class="restaurant-city-detail">${restaurant.city}, ${restaurant.address}</p>
                </div>
                <div>
                    <p class="restaurant-rating-detail"><img alt="rating" class="star-rating-img lazyload" data-src="/images/icons/star-icon.svg"> ${restaurant.rating}</p>
                </div>
            </div>
            <div class="description-restaurantDetail">
                <p>${restaurant.description}</p>
            </div>
            <div class="menuRestaurant">
                <div class="listFoods">
                    <h3>Foods</h3>
                    <ul id="food-menu"></ul>
                </div>
                <div class="listDrinks">
                    <h3>Drinks</h3>
                    <ul id="drink-menu"></ul>
                </div>
            </div>
            <div class="reviewRestaurant">
                <h3>Reviews</h3>
                <div id="review-restaurant"></div>
                <div id="add-new-review"></div>
            </div>
        </div>
    </section>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <article class="box-infoRestaurant">
        <div class="imageRestaurant">
            <img src="${CONFIG.BASE_IMAGE_URL}small/${
  restaurant.pictureId
}" alt="image restaurant"/>
        </div>
        <a href="${`/#/detail/${restaurant.id}`}" class="link-box-infoRestaurant">
            <div class="infoRestaurant">
                <div class="left-info">
                    <h4 class="restaurant-city">${restaurant.city}</h4>
                    <h3 class="restaurant-name">${restaurant.name}</h3>
                </div>
                <div class="right-info">
                    <img src="/images/icons/star-icon.svg" alt="rating icon">
                    <h3 class="restaurant-rating>${restaurant.rating}</h3>
                </div>
            </div>
        </a>
    </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
