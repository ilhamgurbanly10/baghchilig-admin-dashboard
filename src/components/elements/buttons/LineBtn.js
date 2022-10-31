const LineBtn = (props) => {

    const {className} = props;

    return (
        <button type="button" className={`line-btn fl-unstyled-btn ${className}`}>

            <div className="line-btn-box">
                <i className="fa fa-chevron-left line-btn-icon me-1"></i>
                <i className="fa fa-chevron-right line-btn-icon"></i>
            </div>

        </button>
    )

}

export default LineBtn;