import React from 'react';
import Uppy from '@uppy/core'
import Tus from '@uppy/tus'
import Transloadit from '@uppy/transloadit'
import Webcam from '@uppy/webcam';
import { Dashboard } from '@uppy/react'
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import '@uppy/webcam/dist/style.css'

class VideoUpload extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showInlineDashboard: false,
      open: false
    }

    this.uppy = new Uppy({ id: 'uppy1', autoProceed: true, debug: true })
         .use(Webcam, {
          onBeforeSnapshot: () => Promise.resolve(),
          countdown: false,
          modes: [
            'video-audio',
            'video-only',
            'audio-only',
            'picture'
          ],
          mirror: true,
          facingMode: 'user',
          showRecordingLength: true,
          preferredVideoMimeType: null,
          preferredImageMimeType: null,
          locale: {}
        })
        .use(Transloadit, {
            params: {
              auth: {
                key: 'b4f061fc5b5948b2ad5739a92a6f092f'
              },
              template_id: '0e1de5c56f6f4d96a4bfa6a0f0990649',
            },
            waitForEncoding: true
          })
          .on('transloadit:complete', (assembly) => {
            // Could do something fun with this!
            console.log(assembly.results.video_webm[0].url)
            this.props.setVideoURL(assembly.results.video_webm[0].url);
          })
      }

  componentWillUnmount () {
    this.uppy.close()
  }

  render () {
    console.log(this.uppy.getState())
    return (
      <div>
        <h2>Upload video here </h2>
          <Dashboard
            uppy={this.uppy}
            plugins={['Webcam', 'Transloadit']}
            metaFields={[
              { id: 'name', name: 'Name', placeholder: 'File name' }
            ]}
            proudlyDisplayPoweredByUppy={false}
          />

      </div>
    )
  }
}
export default VideoUpload;
