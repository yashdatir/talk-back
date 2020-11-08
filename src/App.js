import React from 'react';
import { ReactMic } from 'react-mic'

class App extends React.Component {

  state = {
    recordStatus: false,
    recordData: null,
  }

  onSetRecord (recordStatus) {
    this.setState({
      ...this.state,
      recordStatus
    })
  }

  onRecord(recordData){
    console.log(recordData)
  }

  onStop(data){
    console.log(data)
    this.setState({
      ...this.state,
      recordData: data
    },()=>console.log(this.state))
  }

  render(){
    return (
      <div>
        <ReactMic
          record={this.state.recordStatus} 
          visualSetting="frequencyBars"
          mimeType="audio/webm"
          onData={this.onRecord}
          onStop={(data)=>this.onStop(data)}
          bitRate={256000} 
          sampleRate={96000} 
          timeSlice={3000}
        />
        <button onClick={()=>this.onSetRecord(!this.state.recordStatus)}>Start/Stop Record</button>
        <audio
          src={this.state.recordData === null ? null : this.state.recordData.blobURL}
          controls
        ></audio>
      </div>
    );
  }
}

export default App;
