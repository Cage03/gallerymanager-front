import React from "react";
import Photo from "../Component/PhotoComponent";

class PhotoPage extends React.Component {
    state = {
        photo: {
            name: "",
            description: "",
            href: ""
        }
    }

    componentDidMount() {
        fetch('https://localhost:7080/Photo?Id=1').then(async (response) => {
            let json = await response.json();
            this.setState({photo: json});
            console.log(json);
        }).catch((error) => {
            alert(error)
        });}

    render() {
        return (
            <div>
                <Photo photo={this.state.photo}/>
            </div>
        );}
}
    
export default PhotoPage;