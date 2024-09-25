//List.jsx

import PropTypes from 'prop-types'

function List(props) {

    const category = props.category;
    const itemList = props.items;


    // const fruits = [
    //     {id: 1, name: "apple", calories: 95}, 
    //     {id: 2, name: "orange", calories: 45}, 
    //     {id: 3, name: "banana", calories: 105}, 
    //     {id: 4,  name: "coconut", calories: 159}, 
    //     {id: 5,  name: "pineapple", calories: 37}];

    //     alphabetical 
    // fruits.sort((a, b) => a.name.localeCompare(b.name)); 

    // by calorie
    // fruits.sort((a, b) => a.calories - b.calories);

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

const listItems =  itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b className='calories'>{item.calories}</b> Calories</li>);

    return(
    <>
       <ul><h3 className='categoryHeader categoryColor '>{category}</h3>{listItems}</ul> 
    </>);
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired,
        })
    ).isRequired,
};

List.defaultProps = {
    category: "Void",
    items: [],
};

export default List