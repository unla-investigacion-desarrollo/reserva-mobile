import { View } from 'react-native';

import { Input } from '../Input';

export type SearchBarProps = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};
export function SearchBar({ searchValue, setSearchValue }: SearchBarProps) {
  return (
    <View>
      <Input value={searchValue} onChangeText={setSearchValue} />
    </View>
  );
}
