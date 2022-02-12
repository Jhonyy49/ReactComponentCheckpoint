import React,{Component} from 'react';
import Profile from '../Images/ProfilePicture.jpg';
import '../css/style.css';

export class ProfilePhoto extends Component{

    render() {
  return (
    <div className="Photo">
        <img src={Profile} alt="image" style={{height: "300px"}} />
    </div>
  )
}

}



