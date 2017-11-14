import React from 'react';
import PropTypes from 'prop-types';
import createjs from 'createjs-browserify';

console.log('Working');

export default class Stage extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.object,
    ]),
    scale: PropTypes.number,  // eslint-disable-line
  }

  constructor(props, context) { // eslint-disable-line
    super(props, context);
  }

  static defaultProps = {
    scale: window.devicePixelRatio || 1,
  };

  componentDidMount() {
    this.stage = new createjs.Stage(this.canvas);
    this.renderChildren();
    this.stage.update();
  }

  componentDidUpdate() {
    this.renderChildren();
    this.stage.update();
  }

  renderChildren() {
    const { children } = this.props;
    this.stage.clear();
    React.Children.map(children, (child) => {
      console.log(child);
      let El = child.type;
      let newProps = {...child.props};

      while (!El.isEaselJSComponent && El) {
        El = new El(newProps, this.context);
        newProps = El.render().props;
        El = El.render().type;
      }

      const CreateJsElement = new El(newProps);

      this.stage.addChild(CreateJsElement.draw());
    });
  }

  render() {
    const { className } = this.props;

    return (
      <canvas ref={(node) => { this.canvas = node; }} className={className} />
    );
  }
}
