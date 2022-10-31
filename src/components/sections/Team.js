import TeamHeader from '../parts/TeamHeader';
import TeamBody from '../parts/TeamBody';
import TeamFooter from '../parts/TeamFooter';

const Team = () => {

    return (
        <section className="team mt-6rem container-main">
            <TeamHeader/> 
            <TeamBody/> 
            {/* <TeamFooter/>      */}
        </section>
    )

}

export default Team;