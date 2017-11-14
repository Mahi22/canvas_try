import React from 'react';
import Stage from '../../src/Stage';
import Shape from '../../src/Shape';
import SpringGrid from '../../src/SpringGrid';

export default class Demo extends React.Component {


  render() {
    return (
      <Stage>
        <SpringGrid columns={2} columnWidth={20}>
          <Shape fill="#ddd" draw="rect" data={[0,0, 20, 20]} x={10} y={10} />
          <Shape fill="#321123" draw="rect" data={[0,0, 10, 10]} x={10} y={50} />
          <div>Hello World</div>
        </SpringGrid>
      </Stage>
    );
  }
}
