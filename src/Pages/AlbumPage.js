import React, {Component} from 'react';
import Album from "../Component/AlbumComponent";

class AlbumPage extends Component {
    state = {
        album: {
            name: "",
            description: "",
            photos: [
                {
                    name: "",
                    description: "",
                    href: ""
                }]
        }
    }
    
    removePhoto(index) {
        this.state.album.photos.splice(index, 1);
        this.forceUpdate();
    }
    
    addPhoto(e) {
        this.state.album.photos.push({
            name: "",
            description: "",
            href: ""
        });
    }
    
    renderPhotos(){
        if(this.state.album.photos.length > 0) {
            return (
                this.state.album.photos.map((photo, index) => {
                    return (<div className={"photo-container"}>
                        <button onClick={() => {
                            this.removePhoto(index)
                        }}>Remove Photo
                        </button>
                        <Album photo={photo}/>
                    </div>)
                })
            )
        }
    }
    
    componentDidMount() {
        fetch('https://localhost:7080/Album?Id=1').then(async (response) => {
            let json = await response.json();
            this.setState({album: json[0]});
            console.log(json[0]);
        }).catch((error) => {
            alert(error)
        });
    }
        
        render() {
            return (
                <div>
                    <button onClick={(e) => this.addPhoto(e)}>Add Photo</button>
                    {this.renderPhotos()}
                </div>
            );}
}

export default AlbumPage;