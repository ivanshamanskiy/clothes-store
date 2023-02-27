# Clothes store

https://store.shamanskiy.com/

This is a simple e-commerce website with almost all the functionality needed.

## Features

- Authentication with Firebase.
- Realtime database keeps track of cart and orders. If user is only collecting items to cart -- they are stored in the 'cart' branch of db under user's unique id. When order is made 'cart' component turns empty and order contents appears in the 'order' branch.
- 'Add to cart' animation from Codepen: https://codepen.io/aaroniker/pen/QWWXKVP;
- Included Simple ESLint rules

## Tech Stack

**Client:** Vue, Vuex, SCSS

**Server:** Firebase
