import React, { Component, Fragment } from "react"; // eslint-disable-line

class MatchMedia extends Component {
  static defaultProps = {
    query: "(min-width: 0px)",
    defaultMatches: true,
    onChange: () => null
  };

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
    this.props.onChange(e);
  };

  render() {
    return null;
  }
}

export const withMatchMedia = query => Component => {
  return class extends React.Component {
    state = { matches: true };

    handleChange = ({ matches }) => {
      this.setState({ matches });
    };

    render() {
      return (
        <Fragment>
          <MatchMedia query={query} onChange={this.handleChange} />
          <Component matches={this.state.matches} {...this.props} />
        </Fragment>
      );
    }
  };
};

export default MatchMedia;
