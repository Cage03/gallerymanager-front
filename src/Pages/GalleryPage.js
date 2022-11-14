import React, {Component} from 'react';
import Gallery from "../Component/GalleryComponent";


class GalleryPage extends Component {
    state = {
        albums: [
            {
                name: "",
                description: "",
                photos: [
                    {
                        name: "",
                        description: "",
                        href: ""
                    }]
            }]
    }

    componentDidMount() {
        fetch('https://localhost:7080/Gallery?Id=1').then(async (response) => {
            let json = await response.json();
            this.setState({albums: json});
            console.log(json);
        }).catch((error) => {
            alert(error)
        });}
    
        render() {
            return (
                <div>
                    <Gallery albums={this.state.albums}/>
                </div>
            );}
    }

    export default GalleryPage;