import ImageGalleryDesign from "../components/ImageGalleryDesign";
import UploadFormDesign from "../components/UploadFormDesign"
import { useAuth } from "../hooks/useAuth"

const Design = () => {
    const { user } = useAuth();

    if(user) {
    return (
        <div className = 'max-2-4xl mx-auto'>
            <UploadFormDesign/>
            <ImageGalleryDesign/>
        </div>
    );
    }
    return (
        <div className = 'max-2-4xl mx-auto'>
            <ImageGalleryDesign/>
        </div>
    );
};

export default Design;

