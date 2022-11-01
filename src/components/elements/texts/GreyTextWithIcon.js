
const GreyTextWithIcon = (props) => {

    const {className, children, icon} = props;

    return (
        <p className={`grey-text font-7 line-height-initial d-flex justify-content-start align-items-start align-content-start ${className}`}>
            <i className={`color-green font-9 fa fa-${icon} me-2 top-3px position-relative`}></i>
            <span>{children}</span>
        </p>
    )

}

export default GreyTextWithIcon;