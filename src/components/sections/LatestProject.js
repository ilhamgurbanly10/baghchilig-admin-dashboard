import LatestProjectHeader from '../parts/LatestProjectHeader';
import LatestProjectBody from '../parts/LatestProjectBody';

const LatestProject = () => {

    return (
        <section className="latest-project mt-6rem py-6rem container-main bg-yellow d-flex flex-column">
            <LatestProjectHeader/> 
            <LatestProjectBody/>    
        </section>
    )

}

export default LatestProject;