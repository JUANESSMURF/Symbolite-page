import React from "react";
import styled from 'styled-components'

export const Modal = () => {
    return (
        <>
            <Overlay>
                <ModalContainer>
                    <h1>Has copiado esto: </h1>
                    <CloseButton>X</CloseButton>
                </ModalContainer>
            </Overlay>
        </>
    )
}

const Overlay = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -300%);

`;

const ModalContainer = styled.div`
    width: 300px;
    min-height: 50px;
    background-color: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border: 1px solid black;
`
const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;

`