import { NewBook } from '.';

export interface ModalContextType extends NewBook {
  handleChange: (
    targetId?: number
  ) => ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  removeBook: (targetId: number) => () => void;
}
