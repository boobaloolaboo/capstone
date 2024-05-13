import { useNavigate } from "react-router-dom";
import useFirestore from "../hooks/useFirestore";

const Home = () => {
    const { docs: images } = useFirestore("photography");
    const { docs: imagesDesign } = useFirestore("design");
    const navigate = useNavigate();

    return (
        <div className="grid hero min-h-screen bg-base-200">
            <div className="grid gap-10">
            <div>
                <h1 className="text-7xl text-center">Hi, I'm so happy you're here</h1>
                <h2 className="text-2xl mt-5 btn btn-outline btn-primary">Explore my work below</h2>
            </div>

            <div className="grid grid-cols-2 gap-10">
            
                <div className="relative w-96 h-96" onClick={() => navigate("/photography")}>
                    <div className="absolute carousel rounded-box bg-opacity-30 w-96">

                        {images.map((image) => (
                        <div 
                            key = {image.imageURL} 
                            className ="carousel-item w-full">
                            <figure>
                                <img src={image.imageURL} alt="blah" />
                            </figure>
                        </div>
                        ))}
                    </div>
            
                    <button className="absolute inset-0 mx-auto my-auto w-1/3 btn btn-primary">Photography</button>
                
                </div> 

                <div className="relative w-96 h-96" onClick={() => navigate("/design")}>
                        <div className="absolute carousel rounded-box bg-opacity-30 w-96">
                            {imagesDesign.map((image) => (
                            <div 
                                key = {image.imageURL} 
                                className ="carousel-item w-full">
                                <figure>
                                    <img src={image.imageURL} alt="blah" />
                                </figure>
                            </div>
                            ))}
                        </div>
                    <button className="absolute inset-0 mx-auto my-auto w-20 btn btn-secondary">Design</button> 
                </div>

                </div>

            </div> 

        </div>
    );
};

export default Home;