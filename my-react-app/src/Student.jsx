import propTypes from 'prop-types'

function Student(props) {

    return(
        <div className="card">
            <img className='card-image' src={props.imageSrc} alt="Img" />
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>

    );
}
Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool,
    imageSrc: propTypes.string
}
Student.defaultProps = {
    name: "guest",
    age: 0,
    isStudent: false,
    imageSrc: ""
}
export default Student