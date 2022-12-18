import React from 'react';
import axios from 'axios';

// React.Component 클래스의 기능을 추가한 App 클래스
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const movies = await axios.get('https://yts.mx/api/v2/list_movies.json');
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }
}

export default App;
