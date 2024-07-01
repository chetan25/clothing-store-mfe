---
Title: Sample Store Exmple with Docker and Micro frontends.
Excerpt: This is an effort to rebuild one of dummy site "https://top-clothing.herokuapp.com/" using micro frontends.
Tech: "Reeact, Recoil, Typescript, Webapck, Javascript, Docker"
Date: ""
---

# Clothing Store with Module Federation.
This is an effort to rebuild one of dummy site "https://top-clothing.herokuapp.com/" using micro frontends.

### Micro Apps
- CheckOut App - This contains all the logic related to the Checkout page and it exposes `CheckoutPage` which is consumed by the HomeApp.
- CheckOut Server - This is a express App that caters to the Stripe payment flow.
- HomeApp - This is the main Shell App that loads other Micro FE Apps.
- ProductApp -This contains all the Product related components.

### State Management 
For state managenent and common state, I have used Recoil. Recoil seems to be a good fit for sharing state, since we can expose atoms from one App and consumed them in another App. A good example is exposing Atoms from the the container app and consuming it in the product app.

### How to use
> Install `Docker` for your machine.
> Then navigate to the root of the Repository and run `docker-compose up`
