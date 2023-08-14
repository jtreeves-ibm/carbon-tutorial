import React, { Component } from 'react';
import { Button, Content } from '@carbon/react';
import MainHeader from './components/MainHeader';

class App extends Component {
  render() {
    return (
      <>
        <MainHeader />
        <Content>
          <Button>Button</Button>
        </Content>
      </>
    );
  }
}

export default App;
