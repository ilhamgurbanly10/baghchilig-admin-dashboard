import '../../assets/css/flash/progress.css';
import {favIcon} from '../files/Images';

function FlashProgress() {

    return ( 
        <div className="fl-progress">
            <img src={favIcon} className="progress-img grow-animation" />
            <div className="fl-progress-copyright">© CODING BY ILHAM GURBANLY</div>		         
        </div>
    )

}

export default FlashProgress;