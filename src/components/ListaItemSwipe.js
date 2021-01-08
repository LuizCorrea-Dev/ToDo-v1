import React from 'react';
import styled from 'styled-components/native';
import Trash from '../images/lixeira-de-reciclagem.png';

const ListaItemSwipe = styled.TouchableHighlight`
    width:100%;
    height:50px;
    background-color:#F3423D;
    justify-content:center;
`;
const ListaItemIcon = styled.View`
    width:20px;
    height:20px;
    background-color:#FFF;
    margin-left:15px;
    `;



export default (props) => {
    return (
        <ListaItemSwipe onPress={props.onDelete}  derlayColor="#FF3333">
                <ListaItemIcon></ListaItemIcon>
                              
        </ListaItemSwipe>
    );
}