import { Dispatch, SetStateAction } from 'react';

export type SetValue<T> = Dispatch<SetStateAction<T>>;
