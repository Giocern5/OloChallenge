import React, {useState, useEffect} from 'react';
import {Button, FlatList, NativeModules, StyleSheet, View} from 'react-native';
import NoteView from './NoteView';

var dummyNotes: Note[] = [
  {title: 'Note 1 Title', body: 'Body for note 1', date: '2023-02-08'},
  {title: 'Note 2 Title', body: 'Body for note 2', date: '2023-01-08'},
  {title: 'Note 3 Title', body: 'Body for note 3', date: '2022-12-08'},
];

const NoteListViewController: React.FC = () => {
  // starting array is notes from the dummy data
  const [notes, setNotes] = useState<Note[]>(dummyNotes);
  const {NoteTakerModule} = NativeModules;

  useEffect(() => {
    NoteTakerModule.getDummyNote((note: Note) => {
      // Gets a hard coded note from native android
      setNotes(prevNotes => [...prevNotes, note]);
    });
  }, []);

  return (
    <View style={styles.buttonContainer}>
      <FlatList
        data={notes}
        renderItem={({item}: {item: Note}) => (
          <NoteView title={item.title} body={item.body} date={item.date} />
        )}
      />
      <Button
        title="Add new note"
        onPress={() => {
          setNotes(prevNotes => [
            ...prevNotes,
            {
              title: 'New note added!',
              body: 'Adding a new note from the click of a button..',
              date: '2022-12-08',
            },
          ]);
        }}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
});

export default NoteListViewController;
