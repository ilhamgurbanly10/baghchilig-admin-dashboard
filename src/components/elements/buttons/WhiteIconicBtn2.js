import { Link } from "react-router-dom";

const WhiteIconicBtn2 = (props) => {

    const {className, icon, url} = props;

    return (
        <Link to={url} className={`white-iconic-btn-2 ${className}`}>
           <i className={`fa fa-${icon}`}></i>
        </Link>
    )

}

export default WhiteIconicBtn2;