import React from 'react';
import "./TotalCost.css";

const TotalCost = ({ totalCosts, ItemsDisplay }) => {
    
    // Calculate total amount from the totalCosts prop
    const total_amount = totalCosts.venue + totalCosts.av + totalCosts.meals;

    return (
        <div className="pricing-app">
            <div className="display_box">
                <div className="header">
                    <h3>Total cost for the event</h3>
                </div>
                <div>
                    {/* Display the total amount */}
                    <h2 id="pre_fee_cost_display" className="price">
                        ${total_amount}
                    </h2>
                    {/* Render selected items */}
                    <div className="render_items">
                        <ItemsDisplay />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalCost;
