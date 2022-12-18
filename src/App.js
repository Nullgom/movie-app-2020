import React from 'react';

// React.Component 클래스의 기능을 추가한 App 클래스
class App extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    // 영화 데이터 로딩!
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000)
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }
}

export default App;
