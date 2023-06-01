import { useState } from 'react';

export const useModal = (initialState = false) => {
    const [isVisible, setIsVisible] = useState(initialState);
    const [modalData, setModalData] = useState(null);

    const openModal = (data) => {
        setModalData(data);
        setIsVisible(true);
    };
    const closeModal = () => setIsVisible(false);

    return {
        isVisible,
        modalData,
        openModal,
        closeModal
    };
};
