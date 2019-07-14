import React,{Component} from 'react'
import SearchBar from '../components/search-bar';
import VideoList from './video-list';
import axios from 'axios'

 const API_END_POINT = "https://api.themoviedb.org/3/"
 const POPULAR_Movies_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=true&append_to_response=images"
 const API_Key ="api_key=184a078836bbb9d9a754e937f43861a4" 

class App extends Component {

    constructor(props){
        super(props)
        this.state = {movieList:{},currentMovie:{}}
    }
    componentWillMount(){
        axios.get(`${API_END_POINT}${POPULAR_Movies_URL}&${API_Key}`).then(function(response){
            this.setState({movieList:response.data.results.slice(1,6)});
            this.setState({currentMovie:response.data.results[0]})
            console.log('--------------')
            console.log('',this.state.currentMovie)
            console.log('--------------');
        }.bind(this));
    }
    render (){
        return(
            <div>
                <SearchBar/>
                <VideoList/>
            </div>
        )
    }   
}

export default App;