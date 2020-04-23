import React from 'react';
import { StyleSheet, Text, View,Header } from 'react-native';
import ChatBot from 'react-native-chatbot';
import CaptureImage from './CaptureImage';

const steps = [
  {
    id: '0',
    message: 'Hi',
    trigger: '1',
  },
  {
    id: '1',
    user:true,
    trigger: '2',
  },
  {
    id:'2',
    message:'How are you?',
    trigger:'3'
  },
  // {

  //   id: ‘7’,
    
  //   component: <CaptureImage nextTrigger=’show-message’/>,
    
  //   metadata: { dataType: ‘image-url’ }
    
  //   },
  {
    id:'3',
    user:true,
  trigger:'4'
  },
  {
    id:'4',
    message:'have your profile picture!',
    trigger:'5'
  },
  {
    id:'5',
    component: <CaptureImage nextTrigger='6'/>,
  },
  {
    id:'6',
    message:'You look amazing',
    trigger:'7'
  },
  {
    id:'7',
    user:true,
    trigger:'8'
  },
  {
    id:'8',
    message:'Bye!',
    trigger:'9'
  },
  {
    id:'9',
    user:true,
    end:true
  }
];

export default function App() {
  return (
    <View style={{marginTop:40}}>
<ChatBot steps={steps} />
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
