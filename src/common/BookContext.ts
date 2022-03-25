import { createContext } from 'react';
import { BookContextType } from '../types';

export const BookContext = createContext<
  BookContextType | Record<string, never>
>({});
