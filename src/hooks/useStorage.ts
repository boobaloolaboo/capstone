import { uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import { useState } from "react";
import { storage, db } from "../firebase/config";
//import { v4 as uuidv4 } from "uuid";
import { addDoc, collection, doc, deleteDoc } from "firebase/firestore";

const useStorage = () => {
    const [progress, setProgress] = useState<number>(0);
    const [error, setError] = useState<Error | null>(null);

    const startUpload = (file: File, FileTitle : string, FileDetails : string) => {
        if(!file) {
            return;
        }

        const fileId = FileTitle;
        const formatFile = file.type.split("/")[1];

        const storageRef = ref(storage, `photography/${fileId}.${formatFile}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', (snapshot) => {

        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
        }, (error) => {
            setError(error);
        }, async () => {
            const downloadURL = await  getDownloadURL(uploadTask.snapshot.ref);

            setProgress(progress);
                
            await addDoc(collection(db, "photography"), {
                    imageURL: downloadURL,
                    createdAt: new Date,
                    title: FileTitle,
                    details: FileDetails
                  });
        }
        );

    }

    const deleteUpload = (FileTitle : string) => {
        async () => {
            await deleteDoc(doc(db, "photography", FileTitle));
        }
    }

    return {
        progress, error, startUpload, deleteUpload
    };
};

export default useStorage;