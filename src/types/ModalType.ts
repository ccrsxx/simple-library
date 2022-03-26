import React from 'react';
import { ModalMode } from '.';

type KillModal = (
  mode: ModalMode
) => (
  e:
    | React.FormEvent<HTMLFormElement>
    | React.MouseEvent<HTMLDivElement | HTMLButtonElement>
) => void;

export interface ModalProps {
  isOpen: boolean;
  modalMode: ModalMode;
  handleModal: KillModal;
}

export interface RemoveBookProps {
  handleModal: KillModal;
}

export interface LoginProps {
  handleModal: KillModal;
}

export interface AddBookProps {
  modalMode: ModalMode;
  handleModal: (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => void;
}
