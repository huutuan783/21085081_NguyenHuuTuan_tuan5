import Toast from 'react-native-toast-message';
import { Alert, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Text, View , Image } from "react-native";
import imageLogo from '../assets/images/Image 19.png';
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { useAccount } from "../ContextAPI/AccountContext";
import { useNavigation } from "@react-navigation/native";

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

export default function Screen_02() {
    const [isChecked, setChecked] = useState(false);
    const { addAccount } = useAccount();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const navigation = useNavigation();

    return(
        <SafeAreaView style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={150}
                >
                    <View style={styles.container}>
                        <View style={{alignItems: 'center'}}>
                            <Image
                                source={imageLogo}
                            />
                            <Text style={{fontSize: 30, fontWeight: 'bold', marginTop: 20, marginBottom: 10}}>Nice to see you!</Text>
                            <Text style={{fontSize: 15, color: 'gray'}}>Create your account</Text>
                        </View>
                        <View style={{gap: 20, width: '100%', paddingHorizontal: 24}}>
                            <View style={styles.inputContainer}>
                                <Image
                                    style={styles.inputIcon}
                                    source={require('../assets/images/codicon_account.png')}
                                />
                                <TextInput
                                    value={userName}
                                    style={styles.input}
                                    placeholder="Enter your user name"
                                    placeholderTextColor={'gray'}
                                    onChangeText={(text) => setUserName(text)}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <Image
                                    style={styles.inputIcon}
                                    source={require('../assets/images/Vector.png')}
                                />
                                <TextInput
                                    value={email}
                                    style={styles.input}
                                    placeholder="Enter your email address"
                                    placeholderTextColor={'gray'}
                                    onChangeText={(text) => setEmail(text)}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <Image
                                    style={styles.inputIcon}
                                    source={require('../assets/images/lock.png')}
                                />
                                <TextInput
                                    secureTextEntry={hidePassword}
                                    value={password}
                                    style={styles.input}
                                    placeholder="Enter your password"
                                    placeholderTextColor={'gray'}
                                    onChangeText={(text) => setPassword(text)}
                                />
                                <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                                    <Image
                                        style={styles.inputIcon}
                                        source={
                                            hidePassword ? require('../assets/images/eyeLock.png') :
                                            require('../assets/images/eye.png')
                                        }
                                    />
                                </TouchableOpacity>
                                
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Checkbox
                                    style={{marginRight: 5}}
                                    value={isChecked}
                                    onValueChange={setChecked}
                                    color={isChecked ? '#197DCA' : undefined}
                                />
                                <Text>I agree with <Text style={{color: '#197DCA'}}>Terms & Conditions</Text></Text>
                            </View>

                            <TouchableOpacity 
                                style={{
                                    backgroundColor: '#25C3D9', 
                                    alignItems: 'center', 
                                    borderRadius: 10, 
                                    marginVertical: 10}}
                                onPress={() => {
                                    if (isChecked === true) {
                                        if (userName.length === 0) {
                                            Toast.show({
                                                type: 'error',
                                                text1: 'Warning',
                                                text2: 'Username is required',
                                                position: 'top',
                                                visibilityTime: 2000,
                                            });
                                            return;
                                        }
                                        addAccount({userName, email, password});
                                        setEmail('');
                                        setUserName('');
                                        setPassword('');
                                        navigation.navigate('Screen_03');
                                    } else {
                                        Toast.show({
                                            type: 'error',
                                            text1: 'Warning',
                                            text2: 'You must agree with Terms & Conditions',
                                            position: 'top',
                                            visibilityTime: 2000,
                                        });
                                    }
                                }}    
                            >
                                <Text style={{color: 'white', fontSize: 15, padding: 15}}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                        <Toast config={toastConfig} />
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        gap: 50,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray'
    },
    inputIcon: {
        width: 20, 
        height: 17, 
        marginHorizontal: 10
    },
    input: {
        flex: 1,
        height: 45,
        fontSize: 16,
    }
});

// import Toast from 'react-native-toast-message'; // Import thư viện để hiển thị thông báo
// import { Alert, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback } from "react-native"; // Import các thành phần cần thiết từ React Native
// import { Text, View, Image } from "react-native"; // Import thêm các thành phần Text, View, Image
// import imageLogo from '../assets/images/Image 19.png'; // Import hình ảnh logo từ thư mục assets
// import Checkbox from "expo-checkbox"; // Import checkbox từ thư viện expo
// import { useState } from "react"; // Import hook useState để quản lý trạng thái
// import { useAccount } from "../ContextAPI/AccountContext"; // Import hook để sử dụng context tài khoản
// import { useNavigation } from "@react-navigation/native"; // Import hook để sử dụng navigation

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

// // Định nghĩa component Screen_02
// export default function Screen_02() {
//     const [isChecked, setChecked] = useState(false); // Quản lý trạng thái checkbox
//     const { addAccount } = useAccount(); // Lấy hàm addAccount từ context
//     const [userName, setUserName] = useState(''); // Trạng thái cho tên người dùng
//     const [email, setEmail] = useState(''); // Trạng thái cho email
//     const [password, setPassword] = useState(''); // Trạng thái cho mật khẩu
//     const [hidePassword, setHidePassword] = useState(true); // Quản lý hiển thị mật khẩu
//     const navigation = useNavigation(); // Khởi tạo hook navigation

//     return (
//         <SafeAreaView style={{ flex: 1 }}> // Bọc toàn bộ nội dung trong SafeAreaView
//             <TouchableWithoutFeedback onPress={Keyboard.dismiss}> // Đóng bàn phím khi nhấn vào bất kỳ vị trí nào
//                 <KeyboardAvoidingView
//                     style={{ flex: 1 }} // Đảm bảo container chính chiếm toàn bộ không gian
//                     behavior={Platform.OS === "ios" ? "padding" : "height"} // Điều chỉnh hành vi bàn phím cho iOS và Android
//                     keyboardVerticalOffset={150} // Khoảng cách từ đầu màn hình đến bàn phím
//                 >
//                     <View style={styles.container}> // Container chính của màn hình
//                         <View style={{ alignItems: 'center' }}> // Căn giữa nội dung
//                             <Image
//                                 source={imageLogo} // Hiển thị logo
//                             />
//                             <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>Nice to see you!</Text> // Tiêu đề chính
//                             <Text style={{ fontSize: 15, color: 'gray' }}>Create your account</Text> // Mô tả
//                         </View>
//                         <View style={{ gap: 20, width: '100%', paddingHorizontal: 24 }}> // Container cho các trường nhập
//                             <View style={styles.inputContainer}> // Container cho trường tên người dùng
//                                 <Image
//                                     style={styles.inputIcon} // Biểu tượng cho trường
//                                     source={require('../assets/images/codicon_account.png')} // Hình ảnh biểu tượng
//                                 />
//                                 <TextInput
//                                     value={userName} // Giá trị trường nhập
//                                     style={styles.input} // Kiểu dáng cho trường nhập
//                                     placeholder="Enter your user name" // Placeholder cho trường
//                                     placeholderTextColor={'gray'} // Màu sắc cho placeholder
//                                     onChangeText={(text) => setUserName(text)} // Cập nhật giá trị khi người dùng nhập
//                                 />
//                             </View>
//                             <View style={styles.inputContainer}> // Container cho trường email
//                                 <Image
//                                     style={styles.inputIcon} // Biểu tượng cho trường
//                                     source={require('../assets/images/Vector.png')} // Hình ảnh biểu tượng
//                                 />
//                                 <TextInput
//                                     value={email} // Giá trị trường nhập
//                                     style={styles.input} // Kiểu dáng cho trường nhập
//                                     placeholder="Enter your email address" // Placeholder cho trường
//                                     placeholderTextColor={'gray'} // Màu sắc cho placeholder
//                                     onChangeText={(text) => setEmail(text)} // Cập nhật giá trị khi người dùng nhập
//                                 />
//                             </View>
//                             <View style={styles.inputContainer}> // Container cho trường mật khẩu
//                                 <Image
//                                     style={styles.inputIcon} // Biểu tượng cho trường
//                                     source={require('../assets/images/lock.png')} // Hình ảnh biểu tượng
//                                 />
//                                 <TextInput
//                                     secureTextEntry={hidePassword} // Điều chỉnh hiển thị mật khẩu
//                                     value={password} // Giá trị trường nhập
//                                     style={styles.input} // Kiểu dáng cho trường nhập
//                                     placeholder="Enter your password" // Placeholder cho trường
//                                     placeholderTextColor={'gray'} // Màu sắc cho placeholder
//                                     onChangeText={(text) => setPassword(text)} // Cập nhật giá trị khi người dùng nhập
//                                 />
//                                 <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}> // Nút để hiển thị/ẩn mật khẩu
//                                     <Image
//                                         style={styles.inputIcon} // Biểu tượng cho hiển thị/ẩn mật khẩu
//                                         source={
//                                             hidePassword ? require('../assets/images/eyeLock.png') :
//                                             require('../assets/images/eye.png') // Thay đổi biểu tượng tùy theo trạng thái
//                                         }
//                                     />
//                                 </TouchableOpacity>
//                             </View>
//                             <View style={{ flexDirection: 'row', alignItems: 'center' }}> // Container cho checkbox và văn bản
//                                 <Checkbox
//                                     style={{ marginRight: 5 }} // Khoảng cách bên phải
//                                     value={isChecked} // Giá trị checkbox
//                                     onValueChange={setChecked} // Cập nhật giá trị khi người dùng nhấn
//                                     color={isChecked ? '#197DCA' : undefined} // Màu sắc khi checkbox được chọn
//                                 />
//                                 <Text>I agree with <Text style={{ color: '#197DCA' }}>Terms & Conditions</Text></Text> // Văn bản cho checkbox
//                             </View>

//                             <TouchableOpacity 
//                                 style={{
//                                     backgroundColor: '#25C3D9', // Màu nền cho nút
//                                     alignItems: 'center', // Căn giữa nội dung
//                                     borderRadius: 10, // Bo tròn góc
//                                     marginVertical: 10 // Khoảng cách dọc
//                                 }}
//                                 onPress={() => { // Xử lý sự kiện nhấn nút
//                                     if (isChecked === true) { // Kiểm tra nếu checkbox được chọn
//                                         if (userName.length === 0) { // Kiểm tra nếu tên người dùng không được nhập
//                                             Toast.show({
//                                                 type: 'error', // Loại thông báo
//                                                 text1: 'Warning', // Tiêu đề thông báo
//                                                 text2: 'Username is required', // Nội dung thông báo
//                                                 position: 'top', // Vị trí hiển thị
//                                                 visibilityTime: 2000, // Thời gian hiển thị
//                                             });
//                                             return; // Kết thúc hàm
//                                         }
//                                         addAccount({ userName, email, password }); // Gọi hàm thêm tài khoản
//                                         setEmail(''); // Xóa giá trị email
//                                         setUserName(''); // Xóa giá trị tên người dùng
//                                         setPassword(''); // Xóa giá trị mật khẩu
//                                         navigation.navigate('Screen_03'); // Điều hướng đến màn hình tiếp theo
//                                     } else {
//                                         Toast.show({
//                                             type: 'error', // Loại thông báo
//                                             text1: 'Warning', // Tiêu đề thông báo
//                                             text2: 'You must agree with Terms & Conditions', // Nội dung thông báo
//                                             position: 'top', // Vị trí hiển thị
//                                             visibilityTime: 2000, // Thời gian hiển thị
//                                         });
//                                     }
//                                 }}    
//                             >
//                                 <Text style={{ color: 'white', fontSize: 15, padding: 15 }}>Continue</Text> // Văn bản trong nút
//                             </TouchableOpacity>
//                         </View>
//                         <Toast config={toastConfig} /> // Cấu hình cho thông báo
//                     </View>
//                 </KeyboardAvoidingView>
//             </TouchableWithoutFeedback>
//         </SafeAreaView>
//     );
// }

// // Định nghĩa kiểu dáng cho component
// const styles
