import axios from 'axios';
import React, {Component} from 'react';
import SearchBar from '../component/Search-bar';
import VideoList from '../container/videolist';
import VideoDetail from '../component/video-details';
import Video from '../component/video';


const API_END_POINT = 'https://api.themoviedb.org/3/';
const POPULAR_MOVIE_URL = 'discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images';
const API_KEY = 'api_key=b1bb009f89a909c0ae0b65bc17104e0e';

class App extends Component {

  constructor(props) {
      super(props);
      this.state={movieList:{}, currentMovie:{}};
  } 

  componentWillMount() {
     this.getFilmsRes();
  }

  getFilmsRes() {
      axios.get(`${API_END_POINT}${POPULAR_MOVIE_URL}&${API_KEY}`).then(function(response) {
        this.setState({movieList: response.data.results.slice(1,7), currentMovie: response.data.results[0]}, function () {
          this.getVideoRes();
        });
    }.bind(this));
  }

  getVideoRes() {
    axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos&include_adult=false`).then (function(response) {
      console.log('----current---', response); 
      const youtubeId = response.data.videos.results[0].key;
      let newCurrentMovie= this.state.currentMovie;
      newCurrentMovie.videoId = youtubeId;
      
      this.setState({currentMovie:newCurrentMovie});
      }.bind(this));
  }

  render () {
    const renderMovieList = () => {
      if (this.state.movieList.length >= 6) {
        return <VideoList movieList={this.state.movieList}/>
      }
    }
    return (
        <div>
            <div className="search-bar">
              <SearchBar/>
            </div>
            <div  className="row">
              <div className="col-md-8">
                <Video videoId={this.state.currentMovie.videoId}/>
                <VideoDetail title={this.state.currentMovie.title} overview={this.state.currentMovie.overview}/>
              </div>
             <div className="col-md-4">
               {renderMovieList()}
              </div>
            </div>
            
        </div>
    );
  }
}

export default App;
