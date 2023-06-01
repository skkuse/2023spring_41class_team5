// 제영님이 해야할 작업
// useModal.js 사용법
// 1. 이 파일을 pages/battle/ 에 넣는다

// 이 다음 부터는 pages/battle/index.jsx 페이지에서 작업
// import 변경
// 2.1. import { useModal } from './useModal';
// 2.2. import { Button, Img, Text, HintModal } from "components";
// 
// 3. 다음 코드를 아무 장소에다가 끼워 넣는다 (버튼 밑에다 둬도 됨)
// {hintModal.isVisible && (
//     <HintModal
//       // ... other props ...
//       hint={hintModal.modalData} // Pass the hint string to the modal
//       onClose={hintModal.closeModal}
//     />
//   )}
// 4.  hintModal, hintString을 선언한다. (hintString은 예시로 넣음)
// const Battle = () => {
//     const hintModal = useModal();
//     const hintString = "Here is a hint!"; // Just an example

//     const [code, setCode] = React.useState(
// 5. 3가지 버튼에 onclick으로 hintModal.openModal(hintString)을 넣는다
// ex)
// <Button
//     className="bg-blue-700 cursor-pointer font-normal leading-[normal] min-w-[151px] text-center text-white_A700 text-l"
//     shape="RoundedBorder5"
//     size="sm"
//     variant="FillTealA70001"
//     onClick={() => hintModal.openModal(hintString)}
// ></Button>

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
