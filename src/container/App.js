import React ,{Component} from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox'
import './app.css';

class App extends Component
{
    constructor(){
        super();
        this.state={
            robots: [],
            searchField:''
        };
    };
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({robots:users}));
    };
    onSearchChange=(event)=>{
        this.setState({searchField:event.target.value});
    }
    render(){
        const filterdRobots=this.state.robots.filter((robot)=>{
            return robot.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
        })
        if (this.state.robots.length===0)
        {
            return (<h1 className='tc'>LOADING</h1>);
        }else
    return (
        
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