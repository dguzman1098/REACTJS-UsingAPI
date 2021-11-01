import React from 'react';
import './App.css';
import Cats from './pages/cats';
import Quotes from './pages/cats';
import { Route, Link } from 'react-router-dom';
import { fetchCat } from './service';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      catUrl: ''
    };
  }

getCat = () => {
  return fetchCat().then(data => {
    let url = data.url;
    this.setState({catUrl: url});
  })
}

  render() {
    return (
      <div className="App">

        <header>
          <nav>
          <ul>
            <li>
              <Link to="/cats">
                Cata-pult
              </Link>
            </li>
            <li>
              <Link to="/quote">
                The only direction
              </Link>
            </li>
          </ul>
        </nav>
        </header>

        <main>
          <Route path="/quotes">
            <Quotes />
          </Route>
          <Route path="/cats">
            <Cats catUrl={this.state.catUrl} getCat={this.getCat}/>
          </Route>
        </main>

      </div>
    
    );
  }
}

export default App;
