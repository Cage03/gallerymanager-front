import React, {Component} from 'react';
import filler from "../Filler.png"

class AlbumComponent extends Component {
    
    render() {
        return (
            <div>
                <a href={"/Photo"}>
                <div className={"album__name-container"}>
                    <label htmlFor="album-name">Album Name</label>
                    <input type="text" id="album-name" value={this.props.album.name}/>
                </div>
                <div className={"album__description-container"}>
                    <label htmlFor="album-description">Album Description</label>
                    <input type="text" id="album-description" value={this.props.album.description}/>
                </div>
                <div className={"album__photo-container"}>
                    <img src={filler} alt={"filler"}/>
                </div>
                </a>
            </div>
        );
    }
}

export default AlbumComponent;
            