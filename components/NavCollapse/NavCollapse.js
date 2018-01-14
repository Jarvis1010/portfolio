import React from 'react';
import styled from 'styled-components';

const Hamburger = styled.button`
  display:none;
  text-align:center;
  text-decoration:none;
  align-self:flex-end;
  cursor:pointer;
  color:white;
  @media screen and (max-width: 700px) {
      display:inline;
  }
`;

const Collapse = styled.div`
    display: flex;
    flex:1;
    padding: 0 1em;
    @media screen and (max-width: 700px) {
        flex-flow:column;
    }
`;

const ResponsiveWrapper = styled.div`
  display: flex;
  flex:1;
  justify-content: space-between;
  @media (max-width: 700px) {
      flex-flow:column;
      align-items:center;
      ${props => props.hide && 'display:none'}
  }
`;

class NavCollapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState(state => ({ visible: !state.visible }));
  }
  render() {
    const { className, children } = this.props;
    return (
      <Collapse>
        <Hamburger onClick={this.handleClick}>☰</Hamburger>
        <ResponsiveWrapper hide={!this.state.visible}>
          {children}
        </ResponsiveWrapper>
      </Collapse>
    );
  }
}

export default NavCollapse;
