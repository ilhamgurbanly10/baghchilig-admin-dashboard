
const BlackTitle2 = (props) => {

    const {className, children, underline} = props;

    return (
        <h2 className={`black-title-2 ${className} ${underline ? 'green-underline' : ''}`}>
            {children}
        </h2>
    )

}

export default BlackTitle2;