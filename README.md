# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```markdown
# React Pet Listing

## Overview
The React Pet Store is a web application assignment that displays a list of pets with pagination. Users can filter pets based on animal type, location, breed. This project utilizes React, Redux, and Bootstrap5 for responsive design.

## Features
- List of pets with pagination
- Filter pets by animal type
- Responsive design

## Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

## Getting Started

### Clone the Repository
```sh
git clone https://github.com/Hritik3108/petListing-assignment.git
cd petListing-assignment
```

### Install Dependencies
Using npm:
```sh
npm install
```

### Running the Project
To start the development server, use the following command:
```sh
npm run dev
```

The application will be available at `http://localhost:5137`.

### Building the Project
To create a production build, use the following command:
```sh
npm run build
```

The production build will be created in the same directory.

## Project Structure
- `src/` - Contains the source code for the project
  - `components/` - Reusable React components
    - `Header.jsx` - header component
    - `CardCarousel.jsx` - Component to display carousel image of pet in card
    - `PetCard.jsx` - Component to display individual pet details
    - `Pagination.jsx` - Component to handle pagination
    - `Prror.jsx` - Component to handle error page or url
    - `Loading.jsx` - Component to handle loading spinner
    - `Message.jsx` - Component to handle Message
  - `redux/` - Redux-related files
    - `store.js` - Redux store configuration
    - `petReducers/` - Redux reducers
  - `App.js` - Main application component
  - `index.js` - Entry point for the React application

## API Endpoints
1.	List of Pets:
o	URL: http://pets-v2.dev-apis.com/pets
o	Description: Fetches a list of pets.
2.	Pets by ID:
o	URL: http://pets-v2.dev-apis.com/pets?id=${id}
o	Description: Fetches a pet's details by its ID.
3.	Breed by Animal Type:
o	URL: http://pets-v2.dev-apis.com/breeds?animal=${animal}
o	Description: Fetches breeds for a specific animal type.
4.	Search API:
o	URL: http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}
o	Description: Searches for pets based on animal type, location, and breed.

## Screenshots
# Home
![Screenshot (489)](https://github.com/user-attachments/assets/299920dc-8f5d-4667-a2fb-ce4f611586fd)

# Search
![Screenshot (491)](https://github.com/user-attachments/assets/b346dce4-d939-4a08-96e2-cbd6b1de1018)

# PetDetails
![Screenshot (490)](https://github.com/user-attachments/assets/4e05716c-7f62-4427-a66d-c907dce6a108)
