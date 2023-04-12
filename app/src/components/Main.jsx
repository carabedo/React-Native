import { Text, StyleSheet, View,StatusBar } from 'react-native';
import Test from './Test';
import TestTouch from './TestTouch';



const styles = StyleSheet.create({
  container: {
    flex: 1  },
});

const Main = () => {

  return (
    <View style={{  flex: 1 ,
                    marginTop: StatusBar.currentHeight || 50,
                    backgroundColor: '#e7eaf6'}}>
        <Text style={{fontSize: 35,marginHorizontal: 16,marginVertical: 30}}>Mi primer App!</Text>
       <Test/>
       <TestTouch/>
    </View>
    );
};

export default Main;