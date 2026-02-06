const Fooditems = () => {

    let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];

    return (
        <ul className="list-group">
            {foodItems.map((item) => (
                <li className="list-group-items">{item}</li>
            ))}

        </ul>

    )
}
export default Fooditems;