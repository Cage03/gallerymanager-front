import React, {Component} from 'react';
import filler from "../Filler.png"


class Photo extends Component{
    
    render() {
        return (
            <div>
                <div className={"photo-container"}>
                    <div className={"photo__name-container"}>
                        <label htmlFor="photo-name">Photo Name</label>
                        <input type="text" id="photo-name" value={this.props.photo.name}/>
                    </div>
                    <div className={"photo__image-container"}>
                        <img src={filler} alt={"filler"}/>
                    </div>
                    <div className={"photo__description-container"}>
                        <label htmlFor="photo-description">Photo Description</label>
                        <input type="text" id="photo-description" value={this.props.photo.description}/>
                    </div>
                </div>
                </div>);}
}

export default Photo;