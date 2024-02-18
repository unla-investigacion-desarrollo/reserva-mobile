/* eslint-disable no-unused-vars */

/** Credits: https://gist.github.com/sakymar/11f600065689829e8596055a10de285d */
import 'react-native';

declare module 'react-native' {
  export namespace StyleSheet {
    type Style = ViewStyle | TextStyle | ImageStyle;
    type NamedStyles<T> = { [P in keyof T]: Style };

    /**
     * Creates a StyleSheet style reference from the given object.
     */
    export function create<T, S extends NamedStyles<S> | NamedStyles<any>>(styles: T | NamedStyles<S>): T & S;
  }
}
