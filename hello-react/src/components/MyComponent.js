import { Component } from 'react';

class MyComponent extends Component {
  render() {
    const { name } = this.prop;
    return (
      <>
        <div>나의 첫째 컴포넌트!</div>
        <div>{name}</div>
      </>
    );
  }
}
  
export default MyComponent;
// 하나의 모듈과 마찬가지이기 때문에 외부로 내보내야 밖에서 Import해서 사용이 가능하다.