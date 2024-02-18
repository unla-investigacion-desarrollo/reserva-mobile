import type { Control, FieldValues, Path, RegisterOptions, UseControllerProps } from 'react-hook-form';

type Rule = Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;

export interface ControllerType<D extends FieldValues> {
  name: Path<D>;
  control: Control<D>;
  rules?: Rule;
}

export type ControlledComponent<D extends FieldValues, P> = UseControllerProps<D> & P;
