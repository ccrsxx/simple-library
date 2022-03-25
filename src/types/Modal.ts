export interface ModalProps {
  title: string;
  author: string;
  year: number;
  isComplete: boolean;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleChange: (
    targetId?: number
  ) => ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
