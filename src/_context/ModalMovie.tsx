import React, { useState } from "react";

export const ModalContext = React.createContext({
  isModalOpen: false,
  toggleModal: () => {},
});
const ModalMovieProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <ModalContext.Provider
      value={{ isModalOpen, toggleModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalMovieProvider;
