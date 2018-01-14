import React from 'react';
import styled from 'styled-components';

export const NavWrapper = styled.nav`
    box-sizing: border-box;
    overflow: hidden;
    position:fixed;
    font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
    line-height: 1.42857143;
    left:0;
    right:0;
    padding:1em;
    display:flex;
    font-size:14px;
    background-color:${props => (props.inverse ? '#222' : '#eaeaea')};
    z-index: 1000;
    flex:1;
    color:${props => (props.inverse ? '#9d9d9d' : '#777')};
  
    & a{
        text-decoration: none;
        color:inherit;
        &:hover{
            text-decoration: none;
        }
    }
    @media (max-width: 600px) {
        justify-content: space-between;
    }

    ${props => (props.bottom ? 'bottom:0;' : 'top:0;')}
`;

export const Icon = styled.img`
    width:auto;
    max-height:22px;
`;

export const IconAnchor = styled.a`
    ${props => props.disabled && 'pointer-events:none;'}
`;
