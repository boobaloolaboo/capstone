import { useEffect, useState } from "react"
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";


type Image = {
    imageURL: string,
    createdAt: Date,
    title: string,
    details: string
}

const useFirestore = (collectionName: string) => {
    const [docs, setDocs] = useState<Image[]>([]);
    const [isLoading, setIsLoading] = useState<Boolean>(true);

    useEffect (() => {
        let unsubscribe: () => void;

        const getData = async () => {
            try {

                const q = query(collection(db, collectionName), orderBy("createdAt", "desc"));
                unsubscribe = onSnapshot(q, (querySnapshot) => {
                const images: Image[] = [];
                querySnapshot.forEach((doc) => {
                    const imageURL = doc.data().imageURL;
                    const createdAt = doc.data().created;
                    const title = doc.data().title;
                    const details = doc.data().details;
                    images.push({ imageURL, createdAt, title, details })
                });
                setDocs(images);
                setIsLoading(false);
                });
            } catch(error) {
                console.log(error);
                setIsLoading(false);
            }
        }
        getData();
        return () => unsubscribe && unsubscribe();
    }, [collectionName])

    return {
        docs, isLoading
    };

};

export default useFirestore;
