import React, { Component, Fragment } from "react"; // eslint-disable-line

class MatchMedia extends Component {
  static defaultProps = {
    media: "(min-width: 0px)",
    defaultMatches: true,
    onChange: () => null,
    children: () => null
  };

  state = {
    matches: this.props.defaultMatches
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
      this.mql = window.matchMedia(this.props.media);
      this.mql.addListener(this.handleChange);
      this.update(this.mql);
    } else {
      const { media, defaultMatches: matches } = this.props;
      this.update({ media, matches });
    }
  }

  handleChange = e => {
    this.update(e);
  };

  update({ matches, media }) {
    this.setState({ matches, media });
    this.props.onChange({ matches, media });
  }

  render() {
    const { matches } = this.state;
    const { children, media } = this.props;
    return children({ matches, media });
  }
}

export const withMatchMedia = media => Component => {
  return class extends React.Component {
    render() {
      return (
        <MatchMedia defaultMatches={false} media={media}>
          {({ matches }) => <Component matches={matches} {...this.props} />}
        </MatchMedia>
      );
    }
  };
};

export default MatchMedia;
