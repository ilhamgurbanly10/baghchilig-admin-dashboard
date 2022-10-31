import { Link } from "react-router-dom";

const GreenBtn2 = (props) => {

    const {className, children, url} = props;

    return (
        <Link to={url} className={`btn-2 btn-underline-2 fl-unstyled-btn ${className}`}>
            {children}
        </Link>
    )

}

export default GreenBtn2;