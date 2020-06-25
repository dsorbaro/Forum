import React, { Component } from "react";
import "./main.css";
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';


class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      connection: 'Connecting',
      publishVideo: true,
    };

    this.sessionEventHandlers = {
       sessionConnected: () => {
         this.setState({ connection: 'Connected' });
       },
       sessionDisconnected: () => {
         this.setState({ connection: 'Disconnected' });
       },
       sessionReconnected: () => {
         this.setState({ connection: 'Reconnected' });
       },
       sessionReconnecting: () => {
         this.setState({ connection: 'Reconnecting' });
       },
     };

     this.publisherEventHandlers = {
       accessDenied: () => {
         console.log('User denied access to media source');
       },
       streamCreated: () => {
         console.log('Publisher stream created');
       },
       streamDestroyed: ({ reason }) => {
         console.log(`Publisher stream destroyed because: ${reason}`);
       },
     };

     this.subscriberEventHandlers = {
       videoEnabled: () => {
         console.log('Subscriber video enabled');
       },
       videoDisabled: () => {
         console.log('Subscriber video disabled');
       },
     };
  }
  // Handling all of our errors here by alerting them
   handleError = (error) => {
    if (error) {
      alert(error.message);
    }
  }



 onSessionError = error => {
   this.setState({ error });
 };

 onPublish = () => {
   console.log('Publish Success');
 };

 onPublishError = error => {
   this.setState({ error });
 };

 onSubscribe = () => {
   console.log('Subscribe Success');
 };

 onSubscribeError = error => {
   this.setState({ error });
 };

 toggleVideo = () => {
   this.setState(state => ({
     publishVideo: !state.publishVideo,
   }));
 };

  // initializeSession = () => {
  //
  //   var apiKey = "46810424";
  //   var sessionId = "1_MX40NjgxMDQyNH5-MTU5MzAyMTcxMjIxOX5YS0xhTU9qeGlvTFBOSS95MVNqNVp4WE9-fg";
  //   var token = "T1==cGFydG5lcl9pZD00NjgxMDQyNCZzaWc9MTY2YTgxNGM0OTljYzdkY2I3MmUwNjkwODE3YTk5ZDFiNTNiMzExZDpzZXNzaW9uX2lkPTFfTVg0ME5qZ3hNRFF5Tkg1LU1UVTVNekF5TVRjeE1qSXhPWDVZUzB4aFRVOXFlR2x2VEZCT1NTOTVNVk5xTlZwNFdFOS1mZyZjcmVhdGVfdGltZT0xNTkzMDIxNzMyJm5vbmNlPTAuMzU3ODg1NDcxOTcyMDU0NTYmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU5MzAyNTMzMiZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";
  //
  //
  //   var session = OT.initSession(apiKey, sessionId);
  //
  //   // Subscribe to a newly created stream
  //   session.on('streamCreated', function(event) {
  //     session.subscribe(event.stream, 'subscriber', {
  //       insertMode: 'append',
  //       width: '100%',
  //       height: '100%'
  //     }, this.handleError);
  //   });
  //   // Create a publisher
  //   var publisher = OT.initPublisher('publisher', {
  //     insertMode: 'append',
  //     width: '100%',
  //     height: '100%'
  //   }, this.handleError);
  //
  //   // Connect to the session
  //   session.connect(token, function(error) {
  //     // If the connection is successful, publish to the session
  //     if (error) {
  //       this.handleError(error);
  //     } else {
  //       session.publish(publisher, this.handleError);
  //     }
  //   });
  // }

  render() {

    // (optional) add server code here
    // initializeSession();
    //  <button onClick={() => {this.initializeSession()}}> Hi </button>
    const { error, connection, publishVideo } = this.state;
    //
    // <div>
    //
    //   <OTSession apiKey="46810424" sessionId="1_MX40NjgxMDQyNH5-MTU5MzAyMTcxMjIxOX5YS0xhTU9qeGlvTFBOSS95MVNqNVp4WE9-fg" token="T1==cGFydG5lcl9pZD00NjgxMDQyNCZzaWc9MTY2YTgxNGM0OTljYzdkY2I3MmUwNjkwODE3YTk5ZDFiNTNiMzExZDpzZXNzaW9uX2lkPTFfTVg0ME5qZ3hNRFF5Tkg1LU1UVTVNekF5TVRjeE1qSXhPWDVZUzB4aFRVOXFlR2x2VEZCT1NTOTVNVk5xTlZwNFdFOS1mZyZjcmVhdGVfdGltZT0xNTkzMDIxNzMyJm5vbmNlPTAuMzU3ODg1NDcxOTcyMDU0NTYmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU5MzAyNTMzMiZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==">
    //     <OTPublisher />
    //     <OTStreams>
    //       <OTSubscriber />
    //     </OTStreams>
    //   </OTSession>
    // </div>

      var apiKey = "46810424";
      var sessionId = "1_MX40NjgxMDQyNH5-MTU5MzAyMTcxMjIxOX5YS0xhTU9qeGlvTFBOSS95MVNqNVp4WE9-fg";
      var token = "T1==cGFydG5lcl9pZD00NjgxMDQyNCZzaWc9MTY2YTgxNGM0OTljYzdkY2I3MmUwNjkwODE3YTk5ZDFiNTNiMzExZDpzZXNzaW9uX2lkPTFfTVg0ME5qZ3hNRFF5Tkg1LU1UVTVNekF5TVRjeE1qSXhPWDVZUzB4aFRVOXFlR2x2VEZCT1NTOTVNVk5xTlZwNFdFOS1mZyZjcmVhdGVfdGltZT0xNTkzMDIxNzMyJm5vbmNlPTAuMzU3ODg1NDcxOTcyMDU0NTYmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU5MzAyNTMzMiZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";

    return (


      <div>
       <div id="sessionStatus">Session Status: {connection}</div>
       {error ? (
         <div className="error">
           <strong>Error:</strong> {error}
         </div>
       ) : null}
       <OTSession
         apiKey={apiKey}
         sessionId={sessionId}
         token={token}
         onError={this.onSessionError}
         eventHandlers={this.sessionEventHandlers}
       >
         <button id="videoButton" onClick={this.toggleVideo}>
           {publishVideo ? 'Disable' : 'Enable'} Video
         </button>
         <OTPublisher
           properties={{ publishVideo, width: 50, height: 50, }}
           onPublish={this.onPublish}
           onError={this.onPublishError}
           eventHandlers={this.publisherEventHandlers}
         />
         <OTStreams>
           <OTSubscriber
             properties={{ width: 100, height: 100 }}
             onSubscribe={this.onSubscribe}
             onError={this.onSubscribeError}
             eventHandlers={this.subscriberEventHandlers}
           />
         </OTStreams>
       </OTSession>
     </div>
    );
  }
}

export default AboutPage;
