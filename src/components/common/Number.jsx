import PropTypes from "prop-types"

const Number = ({number, position, animation}) => {
    return(
        <p className={`main-font-bold text-7xl mx-12 md:text-number absolute bottom-10 ${position}-0 lg:mx-48 ${animation}`}>
            {number}
        </p>
    )
};

Number.propTypes = {
    number : PropTypes.string,
    position : PropTypes.string,
    animation : PropTypes.string
}

export default Number;