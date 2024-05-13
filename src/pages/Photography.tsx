import ImageGallery from "../components/ImageGallery"
import UploadForm from "../components/UploadForm"
import { useAuth } from "../hooks/useAuth"

const Photography = () => {
    const { user } = useAuth();

    if(user) {
        return (
                <div className = 'max-2-4xl mx-auto'>
                    <UploadForm/>
                    <ImageGallery/>
                </div>
        )
    } else {
        return (
                <div className = 'max-2-4xl mx-auto'>
                    <ImageGallery/>
                </div>
        )
    }

};

export default Photography;

