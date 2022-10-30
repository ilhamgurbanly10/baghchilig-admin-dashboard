import Images from '../files/Images';
import VideoCard from '../cards/VideoCard'

const MediaVideos = () => {

     
    return (
        <div className="media-videos row gx-0 mx-auto w-100 mt-5px">
            <VideoCard img={Images.mediaImg01} url="" className="col-12 col-lg me-lg-2px"/>
            <VideoCard img={Images.mediaImg02} url="" className="col-12 col-lg ms-lg-2px"/>
        </div>
    )

}

export default MediaVideos;