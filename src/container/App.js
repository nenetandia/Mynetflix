import axios from 'axios';
import React, {Component} from 'react';
import SearchBar from '../component/Search-bar';
import VideoList from '../container/videolist';

const API_END_POINT = 'https://api.themoviedb.org/3/';
const POPULAR_MOVIE_URL = 'discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images';
const API_KEY = 'api_key=b1bb009f89a909c0ae0b65bc17104e0e';

class App extends Component {

  constructor(props) {
      super(props);
  } 
  componentWillMount() {
    axios.get(`${API_END_POINT}${POPULAR_MOVIE_URL}&${API_KEY}`).then((response) =>{
    console.log('...RES....', response);
  });
  }
  render () {
    return (
        <div>
            <SearchBar/>
            <VideoList/>
        </div>
    );
  }
}

export default App;
