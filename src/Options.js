// Array of both accommodation and food options.
const accomodationOptions = [
    {
        id: "1",
        source: "./images/twin-suite.jpg",
        alt: "Photo of the interior of a hotel suite.",
        title: "Hotel",
        description: "If you're staying in the central city, a hotel will provide easy access to the city's amenities.",
        price: 157,
        minNights: 1,
        maxNights: 5,
        minOcc: 1,
        maxOcc: 2,
    },
    {
        id: "2",
        source: "./images/urbanznz1.jpg",
        alt: "Photo of the interior of a cheap and cheerful shared hostel.",
        title: "Hostel",
        description: "Shared accomodation, cheap, but for the wrong reasons.",
        price: 30,
        minNights: 1,
        maxNights: 10,
        minOcc: 1,
        maxOcc: 1,
    },
    {
        id: "3",
        source: "./images/Greyfrairs-50-of-68.jpg.jpg",
        alt: "Photo of the interior of a modest motel.",
        title: "Motel",
        description: "Often located on main roads, staying here will mean easy access to many of New Zealand's thoroughfares.",
        price: 90,
        minNights: 3,
        maxNights: 10,
        minOcc: 2,
        maxOcc: 4,
    },
    {
        id: "4",
        source: "./images/Whakamaru-exterior-3-bedroom.jpg",
        alt: "Photo of the exterior of a house.",
        title: "House",
        description: "If you're looking to splurge, a home-away-from-home could be the ticket to a great holiday!",
        price: 240,
        minNights: 2,
        maxNights: 15,
        minOcc: 1,
        maxOcc: 4,
    },
]

const foodOptions = [
{
    id: "2",
    source: "./images/Breakfast.jpg",
    alt: "foodimagealt",
    title: "Breakfast and Dinner provided",
    description: "",
    price: 20,
},
{
    id: "3",
    source: "./images/Lunch.jpg",
    alt: "foodimagealt",
    title: "Lunch and Dinner provided",
    description: "",
    price: 30,
},
{
    id: "4",
    source: "./images/Dinner.jpg",
    alt: "foodimagealt",
    title: "Breakfast, Lunch and Dinner provided",
    description: "",
    price: 40,
},
]

// Exports both arrays for use in Views.js
export {accomodationOptions};
export {foodOptions};