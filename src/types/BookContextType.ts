type CurriedContext = (targetId: number) => () => void;

export interface BookContextType {
  editBook: CurriedContext;
  removeBook: CurriedContext;
  toggleRead: CurriedContext;
}
