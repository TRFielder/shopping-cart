import "../styles/home.css";
import Carousel from "../components/carousel";
import { imageData } from '../components/imageData'

const Home = () => {
  
    return (
        <div className="home">
            <Carousel images={imageData}/>        
        </div>
    );
}

export default Home;