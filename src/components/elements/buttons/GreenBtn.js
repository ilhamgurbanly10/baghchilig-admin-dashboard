import { Link } from "react-router-dom";

const GreenBtn = (props) => {

    const {className, children, url} = props;

    return (
        <Link to={url} className={`btn-1 fl-unstyled-btn btn-1-green ${className}`}>
            <div className="btn-1-bg-box btn-1-bg-top-box"></div>
            <span>{children}</span>
            <div className="btn-1-bg-box btn-1-bg-bottom-box"></div>
        </Link>
    )

}

export default GreenBtn;