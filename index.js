import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App';

// import { Loader } from "@googlemaps/js-api-loader";
// const loader = new Loader({
//   apiKey: process.env.GOOGLE_API_KEY,
//   version: "weekly", // You can specify the version you need
//   // ...additionalOptions,
// });

// loader.importLibrary("maps").then((google) => {
//   const root = createRoot(document.getElementById('root'));
//     root.render(<App />);
// });
const root = createRoot(document.getElementById('root'));
    root.render(<App />);




