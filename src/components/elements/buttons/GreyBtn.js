import { Link } from "react-router-dom";

const GreyBtn = (props) => {

    const {className, children, url, underline} = props;

    return (
        <Link to={url} className={`btn-3 fl-unstyled-btn ${className} ${underline && 'grey-underline'}`}>
            {children}
        </Link>
    )

}

export default GreyBtn;