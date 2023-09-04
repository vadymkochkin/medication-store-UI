import React, { useState, createContext, useContext } from 'react';
import { Confirm, Alert, Prompt } from './modals';

export const MODAL_TYPES = {
  CONFIRM_MODAL: "CONFIRM_MODAL",
  ALERT_MODAL: "ALERT_MODAL",
  PROMPT_MODAL: "PROMPT_MODAL"
};

const MODAL_COMPONENTS: any = {
  [MODAL_TYPES.CONFIRM_MODAL]: Confirm,
  [MODAL_TYPES.ALERT_MODAL]: Alert,
  [MODAL_TYPES.PROMPT_MODAL]: Prompt
};

type GlobalModalContext = {
  showModal: (modalType: string, modalProps?: any) => void;
  hideModal: () => void;
  store: any;
};

const initalState: GlobalModalContext = {
  showModal: () => { },
  hideModal: () => { },
  store: {},
};

const GlobalModalContext = createContext(initalState);
export const useGlobalModalContext = () => useContext(GlobalModalContext);

export const GlobalModal: React.FC<any> = ({ children }: any) => {
  const [store, setStore] = useState<any>();
  const { modalType, modalProps }: any = store || {};

  const showModal = (modalType: string, modalProps: any = {}) => {
    setStore({
      ...store,
      modalType,
      modalProps,
    });
  };

  const hideModal = () => {
    setStore({
      ...store,
      modalType: null,
      modalProps: {},
    });
  };

  const renderComponent = () => {
    const ModalComponent = MODAL_COMPONENTS[modalType];
    if (!modalType || !ModalComponent) {
      return null;
    }
    return <ModalComponent id="global-modal" {...modalProps} />;
  };

  return (
    <GlobalModalContext.Provider value={{ store, showModal, hideModal }}>
      {renderComponent()}
      {children}
    </GlobalModalContext.Provider>
  );
};