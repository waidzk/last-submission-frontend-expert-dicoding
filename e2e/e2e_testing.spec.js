/* eslint-disable no-undef */
Feature('e2e_testing');

const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.nothingSection');
  I.see('You haven\'t added the restaurant you like', '.info-nothingLiked');
});

Scenario('liking and unliking a one restaurant', async ({ I }) => {
  I.see('You haven\'t added the restaurant you like', '.info-nothingLiked');

  I.amOnPage('/');

  I.seeElement('.link-box-infoRestaurant');

  const firstRestaurant = locate('.link-box-infoRestaurant .restaurant-name').first();
  firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.box-infoRestaurant');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.seeElement('.link-box-infoRestaurant');
  I.click('.link-box-infoRestaurant');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.nothingSection');
  I.see('You haven\'t added the restaurant you like', '.info-nothingLiked');
});

Scenario('add new review restaurant', ({ I }) => {
  I.see('You haven\'t added the restaurant you like', '.info-nothingLiked');

  I.amOnPage('/');

  I.seeElement('.link-box-infoRestaurant');

  const firstRestaurant = locate('.link-box-infoRestaurant .restaurant-name').first();
  I.click(firstRestaurant);

  I.seeElement('#nameReviewer-input');
  I.fillField('Name', 'Anonnim');

  I.seeElement('#descriptionReview-input');
  I.fillField('Review', 'comfort place ever');

  I.seeElement('#sendReview-input');
  I.click('#sendReview-input');
});
