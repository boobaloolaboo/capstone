import { useState } from "react";
import useStorage from "../hooks/useStorage";

const UploadForm = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectedTitle, setSelectedTitle] = useState<string>("");
    const [selectedDeleteTitle, setSelectedDeleteTitle] = useState<string>("");
    const [selectedDetails, setSelectedDetails] = useState<string>("");
    const { startUpload, progress, deleteUpload } = useStorage();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(selectedFile) {
            startUpload(selectedFile, selectedTitle, selectedDetails);
        }
        setSelectedFile(null);
    };

    const handleDelete = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            deleteUpload (selectedDeleteTitle);
        } catch(error) {
            console.log(error.message, selectedDeleteTitle);
        }
      };
    
    return (
        <div>
            <div className="text-center mt-20 mb-5">
                <form onSubmit = {handleSubmit} className= "flex items-center flex-col gap-3">
                    <input 
                        type="file" 
                        onChange={handleFileChange}
                        className="file-input file-input-bordered w-full max-w-xs" />
                    <input
                        type="text" 
                        placeholder="Image title" 
                        value = {selectedTitle}
                        onChange={(e) => setSelectedTitle(e.target.value)}
                        className="input input-bordered w-full max-w-xs" />
                    <input
                        type="text" 
                        placeholder="Image details" 
                        value = {selectedDetails}
                        onChange={(e) => setSelectedDetails(e.target.value)}
                        className="input input-bordered w-full max-w-xs" />
                    <button 
                        type = "submit" 
                        className={`btn gap-3 ${Boolean(progress) && "loading"}`}
                        disabled = {!selectedFile}
                    >Upload</button>
                </form>
            </div>

            <div className="text-center mb-10">
                <form onSubmit = {handleDelete} className= "flex items-center flex-col gap-3">
                    <input
                        type="text" 
                        placeholder="Image title" 
                        value = {selectedDeleteTitle}
                        onChange={(e) => setSelectedDeleteTitle(e.target.value)}
                        className="input input-bordered w-full max-w-xs" />
                    <button 
                        type = "submit" 
                        className={`btn gap-3 ${Boolean(progress) && "loading"}`}
                        disabled = {!selectedDeleteTitle}
                    >Delete</button>
                </form>
            </div>

        </div>
    );
};

export default UploadForm;