import React from 'react';
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton
} from 'video-react';
import './playerStyle.css'

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
        this.state = {};
    }

   render() {
     console.log(this.props.debateData)
     var firstVideo = this.props.debateData.firstVideoLink=== '' ? null : (
       <div>
       <p> This is the first video </p>
       <div style={{marginTop: '-75%'}}>
       <Player
        style={{paddingTop: '0%'}}
        playsInline
        src={this.props.debateData.firstVideoLink }
       />
       </div>
       </div>
     )

     var secondVideo = this.props.debateData.secondVideoLink=== '' ? null : (
       <div>
       <p> This is the second video</p>
       <div style={{marginTop: '-75%'}}>
       <Player
        style={{paddingTop: '0%'}}
        playsInline
        src={this.props.debateData.secondVideoLink }
       />
       </div>
       </div>
     )

     var thirdVideo = this.props.debateData.thirdVideoLink=== '' ? null : (
       <div>
       <p> This is the third video </p>
       <div style={{marginTop: '-75%'}}>
       <Player
        style={{paddingTop: '0%'}}
        playsInline
        src={this.props.debateData.thirdVideoLink }
       />
       </div>
       </div>
     )
     var fourthVideo = this.props.debateData.fourthVideoLink=== '' ? null : (
       <div>
       <p> This is the fourth </p>
       <div style={{marginTop: '-75%'}}>
       <Player
        style={{paddingTop: '0%'}}
        playsInline
        src={this.props.debateData.fourthVideoLink }
       />
       </div>
       </div>
     )

     var allVideos = (
       <div style={{margin: '0px', paddingTop: '0px',}}>
        {firstVideo}
        {secondVideo}
        {thirdVideo}
        {fourthVideo}
       </div>
     )
     return (
        <div style={{margin: '0px', paddingTop: '0px'}}>
        {allVideos}
        </div>

     );
   }
 }
export default VideoPlayer;
