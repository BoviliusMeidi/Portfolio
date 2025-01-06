const Number = ({number, position, animation}) => {
    return(
        <p className={`main-font-bold text-9xl mx-12 md:text-number absolute bottom-10 ${position}-0 lg:mx-48 ${animation}`}>
            {number}
        </p>
    )
};

export default Number;