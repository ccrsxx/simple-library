type CurriedContext = (targetId: number) => () => void;

export interface BookContextType {
  handleChange: (
    targetId: null | number
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeBook: CurriedContext;
  toggleRead: CurriedContext;
}
