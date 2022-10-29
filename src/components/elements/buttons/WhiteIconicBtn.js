import { Link } from "react-router-dom";

const WhiteIconicBtn = (props) => {

    const {className, icon, url} = props;

    return (
        <Link to={url} className={`white-iconic-btn fl-iconic-btn btn-rotate ${className}`}>
           <i className={`fa fa-${icon}`}></i>
        </Link>
    )

}

export default WhiteIconicBtn;