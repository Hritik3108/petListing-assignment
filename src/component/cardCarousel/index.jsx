const CardCarousel = ({images,petId,petName,breed}) => {

    function carouselList(){
        return images.map((image, index) => (
            <div key={Math.random()} className={`custom-carousel-slide text-center carousel-item ${index==0?'active':''}`}>
                <img src={image} className="carousel-img d-block w-100" alt="Pet Photo"/>
                <div className="carousel-caption custom-caption text-end">
                <h1>{petName}</h1>
                <p>{breed}</p>
                </div>
            </div>
        ));
    }

    return (
        <>
        <div id={`carouselPet${petId}`} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            {carouselList()}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={`#carouselPet${petId}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`#carouselPet${petId}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        </>
    )
}

export default CardCarousel;