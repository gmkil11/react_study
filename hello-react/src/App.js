import { Fragment } from 'react'; // 트리구조를 만들수 있는 컴포넌트 개념이다.
import logo from './logo.svg';
import './App.css';

function App() {
  const headerSytle = {
    backgroundColor: 'orange',
    height: '50px',
    color: 'blue',
  };

  return (
    <>
      <header style={headerSytle}>
        <button type="button">로그인</button>
      </header>

      <img src={logo} alt="로고" />
    </>
  );
}

export default App;
