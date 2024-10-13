import React from 'react'
import './Viewoffer.css'
const offers = [
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/300x150?text=Offer+1',
    title: 'Up to ₹5,000 Off on winter travel bookings',
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/300x150?text=Offer+2',
    title: 'Meesho Sale 70% Off',
  },
];

export const ViewOffer = () => {
  const handleDelete = (id) => {
    // Handle delete logic here
    console.log('Delete offer with id:', id);
  };

  const handleEdit = (id) => {
    // Handle edit logic here
    console.log('Edit offer with id:', id);
  };
  return (
    <div className="offers-container">
    <div className="offers-header1">
      <h1>View Offers</h1>
    </div>
    <div className="offers-list">
      {offers.map((offer) => (
        <div className="offer-card" key={offer.id}>
          <img src={offer.imageUrl} alt={offer.title} className="offer-image" />
          <div className="offer-actions">
            <button onClick={() => handleDelete(offer.id)}>Delete</button>
            <button onClick={() => handleEdit(offer.id)}>Edit</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
