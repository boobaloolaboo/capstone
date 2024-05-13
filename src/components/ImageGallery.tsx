import useFirestore from "../hooks/useFirestore";
import { useState } from 'react';

const ImageGallery = () => {
    const { docs: images, isLoading } = useFirestore("photography");
    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);


if(isLoading) {
    return (
        <div className="text-center mt-10">
            <progress className="progress w-56"></progress>
        </div>
    );
}

  const handleOpenModal = (index: any) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( images.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  const nextSlide = () => {
    slideNumber + 1 === images.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }

    return ( 
        <div>
        {openModal && 
        <div className="w-screen h-screen bg-black bg-opacity-30 flex justify-center items-center fixed z-10 top-0">
            <div className="card card-compact w-96 bg-base-100 shadow-xl absolute z-20">
            <img src={images[slideNumber].imageURL} alt='' />
                <div className="card-body">
                    <div className="card-actions justify-end">
                        <div className="btn btn-circle" onClick={handleCloseModal}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></div>
                        <div className="btn btn-circle" onClick={prevSlide}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg></div>
                        <div className="btn btn-circle" onClick={nextSlide}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg></div>
                    </div>
                </div>
            </div>
        </div>
        }


            <div className="grid md:grid-cols-4 justify-center gap-10 m-20 relative z-0">
            {images && images.map((image, index) => {
                return (
                    <div 
                        key = {image.imageURL}
                        className ="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure>
                            <img 
                            key = {index}
                            src={image.imageURL} 
                            onClick={ () => handleOpenModal(index) }
                            alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{image.title}</h2>
                            <p>{image.details}</p>
                        </div>
                    </div>
                )
            })}
            </div>

    </div>
    );
};

export default ImageGallery;