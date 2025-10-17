# Ecom-Store

<img width="1846" height="741" alt="Ecom-store" src="https://github.com/user-attachments/assets/d020cf73-3757-491b-b1f3-cb27f97bac43" />

### A simple overview of the use/purpose of the project.
 - This project was created as an assignment for Noroff vocational school. The assignment focused on creating a ecommerce store, that fetched data from Noroff api, and was buildt with react router.


### Add a more detailed description of what your project entails and set out to do.
This project involves building a fully functional eCommerce store using React and React Router, powered by the Noroff Online Shop API (https://v2.api.noroff.dev/online-shop).
The app should provide a complete shopping experience — from browsing products to adding items to a cart, completing checkout, and contacting the store.
The design must be responsive, well-structured, and maintain clean, readable code.

Core functionality: 
1. **Homepage**
 - Displays a list of all products fetched from the API.
 - Includes a look-ahead search bar that filters products dynamically as the user types.
 - Each product card shows relevant details (e.g., title, image, and price).
 - Clicking on a product navigates the user to that product’s Individual Product Page.
   
2. **Individual Product Page**
 - Fetches and displays data for a single product using its product ID (e.g., https://v2.api.noroff.dev/online-shop/{id}).
 - Displays: Product title, Description, Image, Price (using the discountedPrice property), Discount calculation if price and discountedPrice differ and Reviews, if available
 - Includes an Add to Cart button: Adds the product to the user’s cart and Updates the cart icon in the header with the new item count
   
3. **Cart Page**
 - Displays a list of all items in the cart with:
 - Product title
 - Quantity
 - Individual price
 - Total price
 - Calculates and displays the cart total.
 - Contains a Checkout button that leads to the Checkout Success Page.

4. **Checkout Success Page**
 - Confirms that the user’s order was successful.
 - Displays a friendly confirmation message.
 - Includes a link back to the store (Homepage).
 - Clears the cart upon arrival on this page.

5. **Contact Page**
- Contains a contact form with the following fields:
 - Full Name (required, min 3 characters)
 - Subject (required, min 3 characters)
- Email (required, must be valid)
- Body/Message (required, min 3 characters)
 - Includes form validation to ensure all fields meet the requirements before submission


### Built With
    React.js

### Getting Started


Installing
First, open your terminal (or Git Bash / command prompt) and run:

bash
git clone https://github.com/kinseeen/ecom-store.git

Next, navigate into the project directory:
cd ecom-store

Install the dependencies:
npm install

Once all the dependencies have been installed, you can start the app by running: 
npm start

This will launch the development server and automatically open the app in your default web browser. By default, it should run at: 
http://localhost:3000

### Contact
My linkedin page: https://www.linkedin.com/in/kine-jakobsen-89b618163/








