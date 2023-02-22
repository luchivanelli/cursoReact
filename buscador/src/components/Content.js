import './content.css'

const Content = ({photos, open})=> {
    return (
        <div className="container">
            <div className="container-content">
                {photos.map(photo => 
                    <article key={photo.id} onClick={()=> open(photo.links.html)} className='content-article'>
                    <img src={photo.urls.regular}></img>
                    <p>{[photo.description, photo.alt_description].join(' - ')}</p>
                    </article>
                )}
            </div>
        </div>
    )
}

export default Content