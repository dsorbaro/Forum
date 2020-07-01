import React from 'react';
import Uppy from '@uppy/core'
import Tus from '@uppy/tus'
import GoogleDrive from '@uppy/google-drive'
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
        .use(Tus, { endpoint: 'https://master.tus.io/files/' })
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
          showRecordingLength: false,
          preferredVideoMimeType: null,
          preferredImageMimeType: null,
          locale: {}
        })
  }

  componentWillUnmount () {
    this.uppy.close()
  }

  render () {
    return (
      <div>
        <h2>Upload video here </h2>
          <Dashboard
            uppy={this.uppy}
            plugins={['Webcam']}
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
