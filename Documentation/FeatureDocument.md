# FORWARD Clone
(FWRD.com)

# Features
  Login/Logout
  Create User
  Products List > Clothing Categories
  Shopping Cart
  Product Comments/Reviews
  Search Bar


# Features - MVP
--------------
[ ] Homepage that has log-in form/ sign-up form / displays clothing.
[ ] Sign up form where users submit their name, username, email, and a password.
[ ] Log-in form where users provide their email and password to log into the site.
[ ] A container on the homepage to view a database of all available products displayed.
[ ] Nav bar that includes the logo, clothing categories, and shopping cart/checkout.
[ ] A Page for each product with a description, available sizes, pictures, buyer comments/reviews, "add to cart" button, and the price.
[ ] A user homepage that displays past orders and saved items in the cart.
[ ] A checkout page referencing the cart.
[ ] A search bar.
[ ] Seeder files for products.


Tables
------

1. Products
    images
    name
    designerId (fk)
    description
    comments/reviews (fk)
    price
    sizes
    categoryId (fk)

2. Designers
    name


3. Users
    username
    email
    password

4. Categories
    name



<!-- 5. Comments/Reviews
    review (optional)
    rating
    user
    product -->
