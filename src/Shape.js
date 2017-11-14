// import React from 'react';
import createjs from 'createjs-browserify';
import PropTypes from 'prop-types';
import Container from './Container';
import { ucfirst } from './utils/transformHelpers';

export default class Shape extends Container {
  static propTypes = {
    draw: PropTypes.oneOf(['circle', 'rect']),
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    fill: PropTypes.string,
  };

  draw() {
    this.shape = new createjs.Shape();
    this.shape.x = this.props.x;
    this.shape.y = this.props.y;

    if (this.props.fill) {
      this.shape.graphics.beginFill(this.props);
    }
    const drawFunc = `draw${ucfirst(this.props.draw)}`;
    this.shape.graphics.beginFill(this.props.fill)[drawFunc].apply(this.shape.graphics, this.props.data);

    return this.shape;
  }
}
