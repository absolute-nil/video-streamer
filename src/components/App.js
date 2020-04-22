import React, { Component } from 'react'
import SearchBar from "./SearchBar/SearchBar"
import youtube from "../apis/youtube"
import VideoList from "./videoList/VideoList"
import VideoDetail from "./VideoDetail"
const KEY = 'AIzaSyBWdhe5nfgsnbvESAc9yhc--we-7A6A5DI';


export class App extends Component {

    state = {
        videos:[],
        selectedVideo:null
    }

    componentDidMount(){
        this.onTermSubmit('react.js');
    }

    onTermSubmit = async term => {
        const response = await youtube.get("/search", {
          params: {
            q: term,
            part: "snippet",
            maxResults: 5,
            type: 'video',
            key: KEY
          }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
          });
      
    }
        

    onVideoSelect = video => {
            this.setState({ selectedVideo: video });
    };
        
    render() {
        return (
            <div className="ui container">
              <SearchBar onTermSubmit={this.onTermSubmit} />
              <div className="ui grid">
                <div className="ui row">
                  <div className="eleven wide column">
                    <VideoDetail video={this.state.selectedVideo} />
                  </div>
                  <div className="five wide column">
                    <VideoList
                      onVideoSelect={this.onVideoSelect}
                      videos={this.state.videos}
                    />
                  </div>
                </div>
              </div>
            </div>
          );      
    }
}

export default App
