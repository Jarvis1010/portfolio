import React, { Component, Fragment } from "react"; // eslint-disable-line

class MatchMedia extends Component {
  static defaultProps = {
    query: "(min-width: 0px)",
    defaultMatches: true,
    children: () => null,
    onChange: () => null
  };

  state = { matches: this.props.defaultMatches };

  mql = null;

  componentDidMount() {
    this.init();
  }

  componentWillUnmount() {
    this.mql.removeListener(this.handleChange);
    this.mql = null;
  }

  componentDidUpdate(lastProps) {
    if (lastProps.media !== this.props.media) {
      this.init();
    }
  }

  init() {
    if (window && window.matchMedia) {
      this.mql = window.matchMedia(this.props.query);
      this.mql.addListener(this.handleChange);
      this.handleChange(this.mql);
    } else {
      const { defaultMatches: matches } = this.props;
      this.handleChange({ matches });
    }
  }

  handleChange = e => {
    this.setState(e);
  };

  render() {
    return this.props.children(this.state);
  }
}

export const withMatchMedia = query => Component => {
  return class extends React.Component {
    render() {
      return (
        <MatchMedia query={query}>
          {props => <Component matches={props.matches} {...this.props} />}
        </MatchMedia>
      );
    }
  };
};

export default MatchMedia;
