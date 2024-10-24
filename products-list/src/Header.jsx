import PropTypes from "prop-types"

function Header({title}){

    return(
        
        <div className="header-container">
            <h1>{title}</h1>
        </div>
    )
}

Header.propTypes = {
    header: PropTypes.string.isRequired
}

Header.defaultProps = {
    title: "Please enter your header text here"
}

export default Header