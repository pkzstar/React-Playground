
function Food() {

const food1 = 'Melon';
const food2 = 'Berries';

    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food