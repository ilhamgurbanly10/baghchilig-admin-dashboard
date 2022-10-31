
const BlackTitle = (props) => {

    const {className, children} = props;

    return (
        <h2 className={`black-title ${className}`}>
            {children}
        </h2>
    )

}

export default BlackTitle;