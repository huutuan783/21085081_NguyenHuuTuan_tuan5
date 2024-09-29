// Import các thư viện cần thiết từ React và React Native
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import các màn hình từ thư mục 'screens'
import Screen_01 from './screens/Screen_01';
import Screen_02 from './screens/Screen_02';
import Screen_03 from './screens/Screen_03';
import Screen_04 from './screens/Screen_04';

// Import context provider cho quản lý tài khoản
import { AccountProvider } from './ContextAPI/AccountContext';

// Định nghĩa hàm App như một component chính của ứng dụng
export default function App() {
  // Tạo stack navigator
  const Stack = createNativeStackNavigator();
  
  return (
    // Bọc toàn bộ ứng dụng trong AccountProvider
    <AccountProvider>
      {/* Cung cấp NavigationContainer để quản lý điều hướng */}
      <NavigationContainer>
        {/* Khởi tạo stack navigator */}
        <Stack.Navigator>
          {/* Định nghĩa các màn hình trong stack */}
          <Stack.Screen
            name="Screen_01" // Tên màn hình
            component={Screen_01} // Component tương ứng
            options={{
              title: '', // Tiêu đề màn hình (có thể để trống)
            }}
          />
          <Stack.Screen
            name="Screen_02"
            component={Screen_02}
            options={{
              title: '',  // Tiêu đề màn hình
              headerTintColor: '#000', // Màu sắc tiêu đề
            }}
          />
          <Stack.Screen
            name="Screen_03"
            component={Screen_03}
            options={{
              title: '',  // Tiêu đề màn hình
              headerTintColor: '#000', // Màu sắc tiêu đề
            }}
          />
          <Stack.Screen
            name="Screen_04"
            component={Screen_04}
            options={{
              title: 'Product name',  // Tiêu đề màn hình
              headerTintColor: '#000', // Màu sắc tiêu đề
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AccountProvider>
  );
}

// Định nghĩa kiểu dáng cho ứng dụng
const styles = StyleSheet.create({
  container: {
    flex: 1, // Chiếm toàn bộ không gian
    backgroundColor: '#fff', // Màu nền trắng
    alignItems: 'center', // Căn giữa theo chiều ngang
    justifyContent: 'center', // Căn giữa theo chiều dọc
  },
});
