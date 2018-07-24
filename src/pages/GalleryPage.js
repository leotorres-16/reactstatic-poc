import React from 'react';
import { withRouteData, Link } from 'react-static';
//

class GalleryPage extends React.Component {
    
    render(){
        const photos = this.props.photos;
        return(
            <div>
                <h1>Nice Gallery below.</h1>
                <br />
                All Photos:
                <div className="wrapper">
                {photos.map(photo => (
                    <div key={photo.id}>
                        <img src={photo.thumbnailUrl} />
                        <p>{photo.title}</p>
                    </div>
                ))}
                </div>
            </div>
        );
    }
}

export default withRouteData(({ photos }) => (<GalleryPage photos={photos} />))
