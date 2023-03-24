import { Component } from 'react';
import './App.scss';
import CardList from './components/card-list/CardList.component';
import SearchBox from './components/search-box/SearchBox.component';

class App extends Component {
  //Previously, it was necessary to include a constructor() on React class components, but it's not required anymore.
  // constructor() {
  //   super();
  //   this.state = {
  //     monsters: null,
  //     search: '',
  //   };
  // }

  state = {
    monsters: null,
    search: '',
  };

  //runs after render
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) =>
        this.setState(
          () => ({ monsters: data }) // <---- leave the ori data untouched
          // () => console.log(this.state.monsters)
        )
      );
  }

  handleChange = (e) => {
    const search = e.target.value.toLowerCase();
    this.setState({ search });
  };

  render() {
    const { state, handleChange } = this;
    const { monsters, search } = state;

    //filter the ori data set only
    const filtered =
      monsters !== null &&
      monsters.filter((el) => el.name.toLowerCase().includes(search));

    return (
      <div className='App'>
        <h1>Monster</h1>
        <SearchBox handleChange={handleChange} />
        <CardList filtered={filtered} />
      </div>
    );
  }
}

export default App;
