export interface NewBook {
  id: number;
  title: string;
  author: string;
  year: number;
  isComplete: boolean;
}

export type ModalMode = 'add' | 'edit' | 'remove' | 'login';
