import React from 'react';
import './App.css';

 // реализуем компонент на классах
 class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className='block'>
        <div className='login_block'>
          <input type="text" placeholder='login'/>
          <input type="password" placeholder='password'/>
          <input type="submit"/>
        </div>
      </div>
    );
  }
}
export default App;

