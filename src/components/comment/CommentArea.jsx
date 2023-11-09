import React from 'react'
import { useState, useEffect } from "react";
import { Modal, Button, ModalContent, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react'

const CommentArea = ({ isVisible }) => {

    return (
        <div className={`border p-5 ${isVisible ? 'visible' : 'hidden'}`}>
            Comment area
        </div>
    )

}

export default CommentArea
