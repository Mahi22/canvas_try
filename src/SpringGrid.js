import React from 'react';
import createjs from 'createjs-browserify';
import PropTypes from 'prop-types';
import Container from './Container';
import { commonPropTypes, commonDefaultProps } from './utils/commonProps';
// import { ucfirst } from './utils/transformHelpers';


export default class SpringGrid extends Container {
  static propTypes = {
    ...commonPropTypes,
    springConfig: PropTypes.shape({
      stiffness: PropTypes.number,
      damping: PropTypes.number,
      precision: PropTypes.number,
    }),
  };

  static defaultProps = {
    ...commonDefaultProps,
    springConfig: { stiffness: 60, damping: 14, precision: 0.1 },
  }

  draw() {
    this.shape = new createjs.Container();
    React.Children.map(this.props.children, (child) => {
      // console.log(child);
      let El = child.type;
      let newProps = {...child.props, stage: this.stage};

    if (!El.isEaselJSComponent && El) {
        // El = new El(newProps, this.context);
        // newProps = El.render().props;
        // El = El.render().type;
        // console.log('render here');
      }

      const CreateJsElement = new El(newProps);

      this.shape.addChild(CreateJsElement.draw());
    });
    return this.shape;
  }
}
