import { useNavigation } from "@react-navigation/native";
import { Keyboard, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { Platform } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { useAccount } from "../ContextAPI/AccountContext";
import { useState } from "react";
import Toast from "react-native-toast-message";


const toastConfig = {
    error: ({ text1, text2, props }) => (
        <View style={{
            height: 60,
            width: '90%',
            backgroundColor: 'white', 
            borderColor: '#25C3D9', 
            borderWidth: 2, 
            borderLeftWidth: 5, 
            borderLeftColor: '#25C3D9', 
            borderRadius: 10, 
            justifyContent: 'center',
            paddingHorizontal: 15,
            alignSelf: 'center',
            zIndex: 999, 
        }}>
            <Text style={{ color: '#25C3D9', fontSize: 18, fontWeight: 'bold' }}>{text1}</Text>
            <Text style={{ color: 'gray', fontSize: 16 }}>{text2}</Text>
        </View>
    ),
};

export default function Screen_03() {
    const navigation = useNavigation();
    const { accounts, checkAccount } = useAccount();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    
    return (
        <SafeAreaView style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={150} // Điều chỉnh giá trị này
                >
                   <View>
                        <Image
                            style={{width: '100%'}}
                            source={require('../assets/images/Image 20.png')}
                        />

                        <View style={{backgroundColor: '#F9FAFC', height: '100%', borderRadius: 7, marginTop: -7, padding: 20}}>
                            <View>
                                <Text style={{fontSize: 35, fontWeight: 'bold', paddingTop: 5, paddingBottom: 20 }}>Welcome!</Text>
                            </View>                            
                            <View style={{gap: 20}}>
                                <View>
                                    <Text style={{fontSize: 16, fontWeight: 'bold', color: 'gray'}}>Email</Text>
                                    <View style={{flexDirection: 'row', backgroundColor: '#F0F1F5', alignItems: 'center'}}>
                                        <Image
                                            style={{marginHorizontal: 10}}
                                                source={require('../assets/images/Vector.png')}
                                        />
                                        <TextInput
                                            style={{height: 45, flex: 1}}
                                            placeholder="Enter email"
                                            onChangeText={(text) => setEmail(text)}
                                        />
                                    </View>
                                </View>
                                <View>
                                    <Text style={{fontSize: 16, fontWeight: 'bold', color: 'gray'}}>Password</Text>
                                    <View style={{flexDirection: 'row', backgroundColor: '#F0F1F5', alignItems: 'center'}}>
                                        <Image
                                            style={{marginHorizontal: 10}}
                                                source={require('../assets/images/lock.png')}
                                        />
                                        <TextInput
                                            secureTextEntry={hidePassword}
                                            style={{height: 45, flex: 1}}
                                            placeholder="Enter password"
                                            onChangeText={(text) => setPassword(text)}
                                        />
                                        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                                            <Image
                                                style={{marginHorizontal: 10, width: 20, height: 17}}
                                                source={
                                                    hidePassword ? require('../assets/images/eyeLock.png') :
                                                    require('../assets/images/eye.png')
                                                }
                                            />
                                        </TouchableOpacity>
                                        
                                    </View>
                                </View>
                            </View>
                            
                            <TouchableOpacity 
                                style={{
                                    backgroundColor: '#25C3D9', 
                                    alignItems: 'center', 
                                    borderRadius: 30, 
                                    marginVertical: 10, 
                                    marginVertical: 60
                                }}
                                onPress={() => {
                                    if (checkAccount(email, password) === true) {
                                        navigation.navigate('Screen_04');
                                    } else {
                                        Toast.show({
                                            type: 'error',
                                            text1: 'Warning',
                                            text2: 'Email or password is not correct',
                                            position: 'top',
                                            visibilityTime: 2000,
                                        });
                                    }
                                }}
                            >
                                <Text style={{color: 'white', fontSize: 15, padding: 15}}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <Toast config={toastConfig} />
                   </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
})

// import { useNavigation } from "@react-navigation/native"; // Import hook để sử dụng navigation
// import { Keyboard, KeyboardAvoidingView, TouchableOpacity, Platform, TouchableWithoutFeedback, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"; // Import các thành phần cần thiết từ React Native
// import { useAccount } from "../ContextAPI/AccountContext"; // Import hook để sử dụng context tài khoản
// import { useState } from "react"; // Import hook useState để quản lý trạng thái
// import Toast from "react-native-toast-message"; // Import thư viện để hiển thị thông báo

// // Định nghĩa cấu hình cho thông báo lỗi
// const toastConfig = {
//     error: ({ text1, text2, props }) => (
//         <View style={{
//             height: 60,
//             width: '90%',
//             backgroundColor: 'white', 
//             borderColor: '#25C3D9', 
//             borderWidth: 2, 
//             borderLeftWidth: 5, 
//             borderLeftColor: '#25C3D9', 
//             borderRadius: 10, 
//             justifyContent: 'center',
//             paddingHorizontal: 15,
//             alignSelf: 'center',
//             zIndex: 999, 
//         }}>
//             <Text style={{ color: '#25C3D9', fontSize: 18, fontWeight: 'bold' }}>{text1}</Text> // Tiêu đề thông báo
//             <Text style={{ color: 'gray', fontSize: 16 }}>{text2}</Text> // Nội dung thông báo
//         </View>
//     ),
// };

// // Định nghĩa component Screen_03
// export default function Screen_03() {
//     const navigation = useNavigation(); // Khởi tạo hook navigation
//     const { accounts, checkAccount } = useAccount(); // Lấy danh sách tài khoản và hàm kiểm tra tài khoản từ context
//     const [email, setEmail] = useState(''); // Trạng thái cho email
//     const [password, setPassword] = useState(''); // Trạng thái cho mật khẩu
//     const [hidePassword, setHidePassword] = useState(true); // Quản lý hiển thị mật khẩu
    
//     return (
//         <SafeAreaView style={{ flex: 1 }}> // Bọc toàn bộ nội dung trong SafeAreaView
//             <TouchableWithoutFeedback onPress={Keyboard.dismiss}> // Đóng bàn phím khi nhấn vào bất kỳ vị trí nào
//                 <KeyboardAvoidingView
//                     style={{ flex: 1 }} // Đảm bảo container chính chiếm toàn bộ không gian
//                     behavior={Platform.OS === "ios" ? "padding" : "height"} // Điều chỉnh hành vi bàn phím cho iOS và Android
//                     keyboardVerticalOffset={150} // Khoảng cách từ đầu màn hình đến bàn phím
//                 >
//                    <View>
//                         <Image
//                             style={{ width: '100%' }} // Hình ảnh cho phần đầu màn hình
//                             source={require('../assets/images/Image 20.png')} // Hình ảnh được sử dụng
//                         />

//                         <View style={{ backgroundColor: '#F9FAFC', height: '100%', borderRadius: 7, marginTop: -7, padding: 20 }}> // Container chính
//                             <View>
//                                 <Text style={{ fontSize: 35, fontWeight: 'bold', paddingTop: 5, paddingBottom: 20 }}>Welcome!</Text> // Tiêu đề chào mừng
//                             </View>                            
//                             <View style={{ gap: 20 }}> // Khoảng cách giữa các trường nhập
//                                 <View>
//                                     <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'gray' }}>Email</Text> // Nhãn cho trường email
//                                     <View style={{ flexDirection: 'row', backgroundColor: '#F0F1F5', alignItems: 'center' }}> // Container cho trường email
//                                         <Image
//                                             style={{ marginHorizontal: 10 }} // Biểu tượng email
//                                             source={require('../assets/images/Vector.png')} // Hình ảnh biểu tượng
//                                         />
//                                         <TextInput
//                                             style={{ height: 45, flex: 1 }} // Kiểu dáng cho trường nhập email
//                                             placeholder="Enter email" // Placeholder cho trường
//                                             onChangeText={(text) => setEmail(text)} // Cập nhật giá trị khi người dùng nhập
//                                         />
//                                     </View>
//                                 </View>
//                                 <View>
//                                     <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'gray' }}>Password</Text> // Nhãn cho trường mật khẩu
//                                     <View style={{ flexDirection: 'row', backgroundColor: '#F0F1F5', alignItems: 'center' }}> // Container cho trường mật khẩu
//                                         <Image
//                                             style={{ marginHorizontal: 10 }} // Biểu tượng mật khẩu
//                                             source={require('../assets/images/lock.png')} // Hình ảnh biểu tượng
//                                         />
//                                         <TextInput
//                                             secureTextEntry={hidePassword} // Điều chỉnh hiển thị mật khẩu
//                                             style={{ height: 45, flex: 1 }} // Kiểu dáng cho trường nhập mật khẩu
//                                             placeholder="Enter password" // Placeholder cho trường
//                                             onChangeText={(text) => setPassword(text)} // Cập nhật giá trị khi người dùng nhập
//                                         />
//                                         <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}> // Nút để hiển thị/ẩn mật khẩu
//                                             <Image
//                                                 style={{ marginHorizontal: 10, width: 20, height: 17 }} // Biểu tượng cho hiển thị/ẩn mật khẩu
//                                                 source={
//                                                     hidePassword ? require('../assets/images/eyeLock.png') :
//                                                     require('../assets/images/eye.png') // Thay đổi biểu tượng tùy theo trạng thái
//                                                 }
//                                             />
//                                         </TouchableOpacity>
//                                     </View>
//                                 </View>
//                             </View>
                            

//                             <TouchableOpacity 
//                                 style={{
//                                     backgroundColor: '#25C3D9', // Màu nền cho nút
//                                     alignItems: 'center', // Căn giữa nội dung
//                                     borderRadius: 30, // Bo tròn góc
//                                     marginVertical: 10, 
//                                     marginVertical: 60 // Khoảng cách dọc
//                                 }}
//                                 onPress={() => {
//                                     if (checkAccount(email, password) === true) { // Kiểm tra tài khoản
//                                         navigation.navigate('Screen_04'); // Điều hướng đến màn hình tiếp theo
//                                     } else {
//                                         Toast.show({ // Hiển thị thông báo nếu thông tin không chính xác
//                                             type: 'error',
//                                             text1: 'Warning',
//                                             text2: 'Email or password is not correct',
//                                             position: 'top',
//                                             visibilityTime: 2000,
//                                         });
//                                     }
//                                 }}
//                             >
//                                 <Text style={{ color: 'white', fontSize: 15, padding: 15 }}>Login</Text> // Văn bản trong nút
//                             </TouchableOpacity>
//                         </View>
//                         <Toast config={toastConfig} /> // Cấu hình cho thông báo
//                    </View>
//                 </KeyboardAvoidingView>
//             </TouchableWithoutFeedback>
//         </SafeAreaView>
//     )
// }

// // Định nghĩa kiểu dáng cho component
// const styles = StyleSheet.create({
//     // Bạn có thể thêm kiểu dáng ở đây nếu cần
// });
