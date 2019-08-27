import React,{Component} from 'react'
import SearchBar from '../components/search-bar';
import VideoList from './video-list';
import VideoDetail from '../components/video-detail';
import axios from 'axios'
import Video from '../components/video'

 const API_END_POINT = "https://api.themoviedb.org/3/"
 const POPULAR_Movies_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images"
 const SEARCH_URL = "search/movie?language=fr&include_adult=false"
 const API_Key ="api_key=184a078836bbb9d9a754e937f43861a4" 

class App extends Component {

    constructor(props){
        super(props)
        this.state = {movieList:{},currentMovie:{}}
    }
    componentWillMount(){
        this.initMovies();
    }
    initMovies(){
        axios.get(`${API_END_POINT}${POPULAR_Movies_URL}&${API_Key}`).then(function(response){
            this.setState({movieList:response.data.results.slice(1,6),currentMovie:response.data.results[0]},function(){
                this.applyVideoToCurrentMovie();
            }); 
        }.bind(this));
    }
    applyVideoToCurrentMovie(){
    
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_Key}&append_to_response=videos&include_adult=false`).then(function(response){
            console.log('--------')
            console.log('',response);
            console.log('--------');
            const youtubekey = response.data.videos.results[0].key;
            let newCurrentMovieState = this.state.currentMovie;
            newCurrentMovieState.videoId = youtubekey
            this.setState({currentMovie : newCurrentMovieState});
            console.log('',newCurrentMovieState);
            console.log('--------');
            
        }.bind(this));
    }
    onClickListItem(movie){
        this.setState({currentMovie:movie},function(){
            this.applyVideoToCurrentMovie();
        })
    }
    onClickSearch(searchText){
        
        if(searchText){
            axios.get(`${API_END_POINT}${SEARCH_URL}&${API_Key}&query=${searchText}`).then(function(response){
                if(response.data && response.data.results[0]){
                    if(response.data.results[0].id != this.state.currentMovie.id)
                        this.setState({currentMovie:response.data.results[0]},() =>{
                            this.applyVideoToCurrentMovie();
                        }); 
                } 
            }.bind(this));
        }  
    }
    render (){
        const renderVideoList =()=>{
            if(this.state.movieList.length>=5){
                return  <VideoList movieList = {this.state.movieList} callback={this.onClickListItem.bind(this)}/>
            }
        }
        return(
            <div>
                <div className="search-bar">
                    <SearchBar callback={this.onClickSearch.bind(this)}/>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <Video videoId={this.state.currentMovie.videoId}/>
                        <VideoDetail title ={this.state.currentMovie.title} description ={this.state.currentMovie.overview}/>
                    </div>
                    <div className="col-md-4">
                        {renderVideoList()}
                        </div>
                </div>
            </div>
        )
    }   
}

export default App;