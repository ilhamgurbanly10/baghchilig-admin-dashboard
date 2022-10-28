import { Link } from "react-router-dom";

const WhiteBtn = (props) => {

    const {className, children, url} = props;

    return (
        <Link to={url} className={`btn-1 fl-unstyled-btn ${className}`}>
            <div className="btn-1-bg-box btn-1-bg-top-box"></div>
            <span>{children}</span>
            <div className="btn-1-bg-box btn-1-bg-bottom-box"></div>
        </Link>
    )

}

export default WhiteBtn;