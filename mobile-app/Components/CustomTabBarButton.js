import {
    View,
    TouchableOpacity,
    StyleSheet
  } from 'react-native';

export const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity style={{
      top: -30,
      justifyContent: 'center',
      alignContent: 'center',
    }} onPress={onPress}>
      <View style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#57B8EE',
        ...styles.shadow
      }}>
        {children}
      </View>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    shadow: {
      shadowColor: '#7F5DF0',
      shadowOffset: {
        width: 0,
        height: 10
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5
    }
  });