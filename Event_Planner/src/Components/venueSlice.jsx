import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

// Venue slice definition
export const venueSlice = createSlice({
  name: "venue",
  initialState: [
    {
      img: "https://pixabay.com/images/download/chairs-2181916_640.jpg",
      name: "Conference Room (Capacity:15)",
      cost: 3500,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/event-venue-1597531_640.jpg",
      name: "Auditorium Hall (Capacity:200)",
      cost: 5500,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/convention-center-3908238_640.jpg",
      name: "Presentation Room (Capacity:50)",
      cost: 700,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/chairs-2181916_640.jpg",
      name: "Large Meeting Room (Capacity:10)",
      cost: 900,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/laptops-593296_640.jpg",
      name: "Small Meeting Room (Capacity:5)",
      cost: 1100,
      quantity: 0,
    },
  ],
  reducers: {
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        if (state[index].name === "Auditorium Hall (Capacity:200)" && state[index].quantity >= 3) {
          return;
        }
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

// Exporting actions
export const { incrementQuantity, decrementQuantity } = venueSlice.actions;

// Default export for the reducer
// export default venueSlice.reducer;

// React Component to manage venues
const VenueComponent = () => {
  const dispatch = useDispatch();
  const venueItems = useSelector((state) => state.venue);

  // Add to cart handler
  const handleAddToCart = (index) => {
    if (venueItems[index].name === "Auditorium Hall (Capacity:200)" && venueItems[index].quantity >= 3) {
      return; // Prevent further additions
    }
    dispatch(incrementQuantity(index));
  };

  // Remove from cart handler
  const handleRemoveFromCart = (index) => {
    if (venueItems[index].quantity > 0) {
      dispatch(decrementQuantity(index));
    }
  };

  // Calculate remaining Auditorium quantity
  const remainingAuditoriumQuantity = 3 - venueItems.find((item) => item.name === "Auditorium Hall (Capacity:200)").quantity;

  // Calculate total cost
  const calculateTotalCost = (section) => {
    let totalCost = 0;
    if (section === "venue") {
      venueItems.forEach((item) => {
        totalCost += item.cost * item.quantity;
      });
    }
    return totalCost;
  };

  const venueTotalCost = calculateTotalCost("venue");

  // Rendering component
  return (
    <div>
      {venueItems.map((item, index) => (
        <div key={index}>
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Cost: ${item.cost}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => handleAddToCart(index)}>Add</button>
          <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
        </div>
      ))}
      <div className="total_cost">Total Cost: ${venueTotalCost}</div>
      <div>Remaining Auditorium Quantity: {remainingAuditoriumQuantity}</div>
    </div>
  );
};

// Default export for the reducer
export default venueSlice.reducer;
