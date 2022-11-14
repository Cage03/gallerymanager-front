import React, {Component} from 'react';
import AlbumComponent from "../Component/AlbumComponent";

class Gallery extends Component {

    removeAlbum(index) {
        this.props.albums.splice(index, 1);
        this.forceUpdate();
    }

    addAlbum(e) {
        this.props.albums.push({
            name: "",
            description: "",
            photos: [{name: "",
                description: "",
                href: ""}]
        });

        this.forceUpdate();
    }

    renderAlbums(){
        if(this.props.albums.length > 0) {
            return (
                this.props.albums.map((album, index) => {
                    return (<div className={"album-container"}>
                        <button onClick={() => {
                            this.removeAlbum(index)
                        }}>Remove Album
                        </button>
                        <AlbumComponent album={album}/>
                    </div>)
                })
            )
        }
    }

    render() {
        return (
            <div>
                <button onClick={(e) => this.addAlbum(e)}>Add Album</button>
                {this.renderAlbums()}
            </div>
        );
    }
}

export default Gallery;