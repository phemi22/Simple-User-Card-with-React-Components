import PropTypes from "prop-types"

function UserCard(props){

    return(

        <div className="main-container">
            <div className="username-container">
                <p>{props.userName}</p>
            </div>

            <div className="age-container">
                <p>{props.age}</p>
            </div>

            <div className="occupation-container">
                <p>{props.occupation}</p>
            </div>
        </div>
    )
}

UserCard.propTypes = {
    userName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    occupation: PropTypes.string.isRequired
}

UserCard.defaultProps = {
    userName : "Enter Your UserName Here",
    age: "Enter Your Age Here",
    occupation: "Enter Your Occupation Here"
}

export default UserCard