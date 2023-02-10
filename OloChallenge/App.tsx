import {Dimensions, StyleSheet, View, NativeModules} from 'react-native';
import NoteListViewController from './note_taker/NotesViewController';

export default function App() {
  return (
    <View style={{backgroundColor: 'black'}}>
      <NoteListViewController />
    </View>
  );
}
