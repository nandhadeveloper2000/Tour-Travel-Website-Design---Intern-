import React from "react";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";
import PlacesCard from "./PlacesCard";

const PlaceData =[
    {
        img: Img1,
        title: "Boat Tour",
        location: "USA",
        description: "Discover the hidden gems in the Caribbean Sea on a relaxing cultural tour.",
        price: "150",
        type: "Cultural Relax",
    },
    {
        img: Img2,
        title: "Taj Mahal",
        location: "India",
        description: "Experience the breathtaking beauty of the Taj Mahal, one of the world's most iconic cultural landmarks",
        price: "1000",
        type: "Cultural Relax",
    },
    {
        img: Img3,
        title: "Underwater Adventure",
        location: "Australia",
        description: "Explore the incredible Great Barrier Reef and its diverse marine life on this thrilling underwater adventure.",
        price: "50",
        type: "Adventure Relax",
    },
    {
        img: Img4,
        title: "Machu Picchu",
        location: "Peru",
        description: "Experience the majestic ancient city of Machu Picchu, a stunning blend of culture and adventure.",
        price: "1000",
        type: "Cultural Adventure",
    },
    {
        img: Img5,
        title: "Eiffel Tower",
        location: "France",
        description: "Witness the iconic Eiffel Tower from the top and enjoy the stunning view of Paris.",
        price: "1000",
        type: "Cultural Relax",
    },
    {
        img: Img6,
        title: "Sydney Opera House",
        location: "Australia",
        description: "Experience the stunning architecture of the Sydney Opera House, a cultural landmark known worldwide.",
        price: "1000",
        type: "Cultural Relax",
    },
]

const Places = ({handleOrderPopup}) => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Best Place to visit
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
                PlaceData.map((item, index)=>(
                    <PlacesCard handleOrderPopup={handleOrderPopup} Key={index} {...item} />
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Places;
