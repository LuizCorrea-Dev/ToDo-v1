import React from 'react';
import styled from 'styled-components/native';

const Header = styled.View`
    width:100%;    
    height:30px;
    background-color:#1E6A87;    
    justify-content:center;
    align-items:center;
`;
const HeaderText = styled.Text`
    color: #fff;
    font-size:17px;
    font-weight:bold;
`;

export default () => {
    return (
        <Header>
            <HeaderText>ToDo - List</HeaderText>
        </Header>
    );
}