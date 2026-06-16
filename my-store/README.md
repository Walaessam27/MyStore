# MyStore - Angular E-Commerce Application

This project is part of the Udacity Full Stack JavaScript Nanodegree. It is a single-page e-commerce application built with Angular.

## Features
- **Product List**: View all available products fetched from a JSON API.
- **Product Details**: Click on a product to see more information.
- **Shopping Cart**: Add products to the cart, update quantities, and remove items.
- **Checkout Form**: A validated form to collect user information (Name, Address, Credit Card).
- **Order Confirmation**: A success page showing the order details after a successful checkout.

## Technical Implementation
- **Components**: Used a logical hierarchy (Parent-Child) with @Input and @Output.
- **Services**: Used services to share data between unrelated components (Cart logic).
- **Routing**: Implemented Angular Router for navigation without page reloads.
- **Validation**: Template-driven forms with custom validation rules.

## Installation and Setup
1. Clone the repository.
2. Run `npm install --legacy-peer-deps`.
3. Run `ng serve` to start the development server.
4. Open `http://localhost:4200` in your browser.

## Built With
- Angular Framework
- TypeScript
- HTML/CSS
