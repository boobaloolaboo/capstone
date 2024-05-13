import { uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import { useState } from "react";
import { storage, db } from "../firebase/config";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection } from "firebase/firestore";

const useStorageDesign = () => {
    const [progress, setProgress] = useState<number>(0);
    const [error, setError] = useState<Error | null>(null);

    const startUpload = (file: File, FileTitle : string, FileDetails : string) => {
        if(!file) {
            return;
        }

        const fileId = uuidv4();
        const formatFile = file.type.split("/")[1];

        const storageRef = ref(storage, `design/${fileId}.${formatFile}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', (snapshot) => {

        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
        }, (error) => {
            setError(error);
        }, async () => {
            const downloadURL = await  getDownloadURL(uploadTask.snapshot.ref);

            setProgress(progress);
                
            await addDoc(collection(db, "design"), {
                    imageURL: downloadURL,
                    createdAt: new Date,
                    title: FileTitle,
                    details: FileDetails
                  });
        }
        );

    }

    return {
        progress, error, startUpload
    };
};

export default useStorageDesign;