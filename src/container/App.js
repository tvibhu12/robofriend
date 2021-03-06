import React ,{Component} from 'react';
import CardList from '../component/CardList'; //CardList component
import SearchBox from '../component/SearchBox' //searchBox component
import './app.css'; //import styling file 

class App extends Component
//state for changeing the data
{
    constructor(){
        super();
        this.state={
            robots: [],
            searchField:''
        };
    };
    //fetch data from API and save it into STATE
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({robots:users}));
    };
    //search event 
    onSearchChange=(event)=>{
        this.setState({searchField:event.target.value});
    }
    render(){
        //Filter Users
        const filterdRobots=this.state.robots.filter((robot)=>{
            return robot.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
        })
        //Loading 
        if (this.state.robots.length===0)
        {
            return (<h1 className='tc'>LOADING</h1>);
        }else
    return (
        //Displaying Card
        
    <div className='tc'>
    <h1>Robo Friends</h1>
    <SearchBox SearchChange={this.onSearchChange}/>
    <div style={{overflowY:'scroll',height:'800px',border:'1px solid black'}}>
    <CardList robots={filterdRobots}/>
    </div>
    </div>
    );}
}
export default App;