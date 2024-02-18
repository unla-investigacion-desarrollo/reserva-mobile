declare module 'cerealizr';
declare module '*.png' {
  const value: ImageSourcePropType;
  export default value;
}
declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';

  const content: (props: SvgProps) => JSX.Element;
  export default content;
}
