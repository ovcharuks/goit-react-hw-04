import ImageCard from "../ImageCard/ImageCard";


const ImageGallery = ({photos}) => {

    return(
    <ul>
	{/* Набір елементів списку із зображеннями */}
	{photos.map(photo => <li key={photo.id}>
		
        <ImageCard photo={photo}/>
        {/* <div>
		  <img src={photo.urls.small
} alt={photo.alt_description
} />
		</div> */}
	</li>)}
</ul>
    )
}

export default ImageGallery;