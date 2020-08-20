import React , {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx';


class App extends Component {
   
   constructor() {

     super(); // enable us to use the Component constructor

     this.state = {

      monsters : [] , 
      searchField : ''

     };

     

   }
     
     // This is a Life Cycle Methode : integrated into the Component ' React.ComponentLifecycle ' .
   // ++ they are called at diff. stagece when this componemt get rendred .
 //   ++ Mount : is when React put the Component on the DOM for the first time : 
      /*  it will call  componentDidMount by defaulr  */
   componentDidMount() { 
      // we fetch 'make an API request'
       fetch('https://jsonplaceholder.typicode.com/users')
       .then( Response => Response.json() )
       .then( users =>  this.setState({ monsters: users }) );
      
   } 

   handleChange = e => {
        
      this.setState(  { searchField : e.target.value }  ) ;
   };




   render() {   

      // const monsters = this.state.monsters; 
      // const searchField = this.state.searchField; 
      const { monsters , searchField  } = this.state;
      const filteredMonsters = monsters.filter( monster => (
        monster.name.toLowerCase().includes( searchField.toLocaleLowerCase() ) 
      ) );


      return ( 

          <div className="App">
             <h1>Monsters Rolodex</h1>
             <SearchBox 
             placeholder= {'Search Monsters'} 
             handleChange=  { this.handleChange }    
             />
             <CardList monsters ={filteredMonsters} />
          </div>  

      );

   }
}

export default App;
  