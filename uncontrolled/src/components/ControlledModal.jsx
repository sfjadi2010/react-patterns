import { styled } from "styled-components";

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 70, 0.5);
  border-radius: 5px;
`;

const ModalContent = styled.div`
  margin: 5% auto;
  padding: 20px;
  width: 90%;
  background-color: wheat;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ControlledModal = ({shouldDisplay, onClose, children}) => {
  return (
    <>
      {shouldDisplay && (
        <ModalBackground onClick={onClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose}>{shouldDisplay ? "Hide Modal" : "Show Modal"}</button>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

export default ControlledModal;
