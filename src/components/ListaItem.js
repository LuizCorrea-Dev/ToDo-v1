import React from 'react';
import styled from 'styled-components/native';

const Item = styled.TouchableHighlight`
  background-color:#F4E8C3;
  flex-direction:row;
  height:50px;
  align-items:center;
  padding-left:20px;
  padding-right:20px;
`;
const ItemText = styled.Text`
  font-size:15px;
  color: #0E1822;
  flex:1;
`;
const ItemCheck = styled.View`
  width:20px;
  height:20px;
  border-radius:10px;
  border:5px solid #fff;
  background-color:${props=>props.done?'#EA5B22':'#ddd'};
`;

export default (props) => {
    return (
        <Item onPress={props.onPress} underlayColor="#FFD259" activeOpacity={1}>
            <>
            <ItemText>{props.data.task} </ItemText>
            <ItemCheck done={props.data.done} ></ItemCheck>
            </>
        </Item>
    );
}