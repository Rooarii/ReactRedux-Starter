import React,{Component} from 'react'
/*
const SearchBar = function(){
    return <input/>
}

const SearchBar = ()=>{
    return <input/>
}*/

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state ={searchText:"",placeHolder:"Type your movie..."}
    }
    render(){
        return (
            <div className="row">
                <div className="col-lg-8 input-group">
                    <input onKeyUp={this.handleChange.bind(this)} type="text" className="form-control input-lg" placeholder={this.state.placeHolder}/>
                    <span className="input-group-btn">
                        <button className="btn btn-secondary" onClick={this.handleOnClick.bind(this)}>Search</button>
                    </span>
                </div>
            </div>   
        )
    }
    handleChange(event){
        this.setState({searchText:event.target.value});
    }
    handleOnClick(event){ 
        /***console.log('-----')
        console.log('click');
        console.log('-----'); ***/ 
        this.props.callback(this.state.searchText); 
    }
}
export default SearchBar;