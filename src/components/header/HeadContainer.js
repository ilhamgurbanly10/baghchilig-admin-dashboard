import {SocialMediaButtons} from '../elements/Lists'
import {Contacts} from '../elements/Lists'

const HeadContainer = () => {

    return (
        <div className="head-container d-none d-md-flex justify-content-between align-items-center bigger-container py-2 border-bottom-lightgrey">
            
            <SocialMediaButtons/>

            <Contacts/>

        </div>
    )

}

export default HeadContainer;