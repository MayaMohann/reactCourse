import useState from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMealSelection } from './mealsSlice';

const ConferenceEvent = () => {
    const mealsItems = useSelector((state) => state.meals);
    const dispatch = useDispatch();
    const [numberOfPeople, setNumberOfPeople] = useState(1);

    const handleMealSelection = (index) => {
        dispatch(toggleMealSelection(index));
    };

    const calculateTotalCost = (section) => {
        let totalCost = 0;
        if (section === "meals") {
            mealsItems.forEach((item) => {
                if (item.selected) {
                    totalCost += item.cost * numberOfPeople;
                }
            });
        }
        return totalCost;
    };

    const mealsTotalCost = calculateTotalCost("meals");

    return (
        <div>
            <div className="input-container venue_selection">
                <label htmlFor="numberOfPeople"><h3>Number of People:</h3></label>
                <input
                    type="number"
                    className="input_box5"
                    id="numberOfPeople"
                    value={numberOfPeople}
                    onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
                    min="1"
                />
            </div>

            <div className="meal_selection">
                {mealsItems.map((item, index) => (
                    <div className="meal_item" key={index} style={{ padding: 15 }}>
                        <div className="inner">
                            <input
                                type="checkbox"
                                id={`meal_${index}`}
                                checked={item.selected}
                                onChange={() => handleMealSelection(index)}
                            />
                            <label htmlFor={`meal_${index}`}> {item.name} </label>
                        </div>
                        <div className="meal_cost">${item.cost}</div>
                    </div>
                ))}
            </div>

            <div className="total_cost">Total Cost: {mealsTotalCost}</div>
        </div>
    );
};

export default ConferenceEvent;
