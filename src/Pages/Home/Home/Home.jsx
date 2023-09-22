import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import WorkTime from "../WorkTime/WorkTime";


const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <About></About> 
            <Services></Services> 
            <WorkTime></WorkTime>        
        </div>
    );
};

export default Home;