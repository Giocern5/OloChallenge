import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

const NoteView: React.FC<Note> = note => {
  return (
    <View
      style={{
        backgroundColor: 'grey',
        marginTop: 3,
        paddingLeft: 4,
        paddingRight: 4,
      }}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{note.title}</Text>
        <Text style={styles.dateStyle}>{note.date}</Text>
      </View>
      <Text style={styles.bodyStyle}>{note.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 3,
    flexDirection: 'row',
    height: 40,
    width: Dimensions.get('window').width,
    justifyContent: 'space-between',
  },

  titleStyle: {
    fontSize: 24,
    marginTop: 4,
    color: 'black',
  },

  dateStyle: {
    fontSize: 24,
    marginTop: 4,
    marginRight: 10,
    color: 'black',
  },
  bodyStyle: {
    fontSize: 20,
    color: 'white',
    flexWrap: 'wrap',
  },
});

export default NoteView;
