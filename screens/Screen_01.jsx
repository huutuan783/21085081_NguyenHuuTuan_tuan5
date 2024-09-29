import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View , Image, SafeAreaView} from "react-native";
import image from '../assets/images/Container 17.png'
import { useNavigation } from "@react-navigation/native";

export default function Screen_01() {
    const navigation = useNavigation();
    return(
        <SafeAreaView style={{flex: 1}}>
             <View style={styles.container}>
                <View style={{gap: 6}}>
                    <Image
                        style={{height: 380, borderRadius: 24, marginTop: 10}}
                        source={image}
                    />
                    <Text style={{fontSize: 23, fontWeight: 'bold'}}>Boost Productivity</Text>
                    <Text style={{fontSize: 15, color: 'gray'}}>Simplify tasks, boost productivity</Text>
                    <TouchableOpacity 
                        style={{backgroundColor: '#25C3D9', alignItems: 'center', borderRadius: 5, marginTop: 14, marginBottom: 10}}
                        onPress={() => navigation.navigate('Screen_02')}
                    >
                        <Text style={{color: 'white', fontSize: 18, padding: 14}}>Sign up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{alignItems: 'center'}}
                        onPress={() => navigation.navigate('Screen_03')}
                    >
                        <Text style={{fontSize: 18, color: 'gray'}}>Login</Text>
                    </TouchableOpacity>
                    <View style={{alignItems: 'center', marginTop: 10}}>
                        <Image
                            style={{width: 46, height: 12}}
                            source={require('../assets/images/....png')}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    }
})

// import { StyleSheet, TouchableOpacity } from "react-native"; // Import các thành phần cần thiết từ React Native
// import { Text, View, Image, SafeAreaView } from "react-native"; // Import thêm các thành phần Text, View, Image
// import image from '../assets/images/Container 17.png'; // Import hình ảnh từ thư mục assets
// import { useNavigation } from "@react-navigation/native"; // Import hook để sử dụng navigation trong component

// // Định nghĩa component Screen_01
// export default function Screen_01() {
//     const navigation = useNavigation(); // Khởi tạo hook navigation để điều hướng giữa các màn hình
    
//     return (
//         <SafeAreaView style={{ flex: 1 }}> // Bọc nội dung trong SafeAreaView để tránh che khuất bởi thanh trạng thái
//             <View style={styles.container}> // Container chính của màn hình
//                 <View style={{ gap: 6 }}> // Tạo khoảng cách giữa các phần tử con
//                     <Image
//                         style={{ height: 380, borderRadius: 24, marginTop: 10 }} // Hình ảnh với chiều cao và viền bo
//                         source={image} // Nguồn hình ảnh được import
//                     />
//                     <Text style={{ fontSize: 23, fontWeight: 'bold' }}>Boost Productivity</Text> // Tiêu đề chính của màn hình
//                     <Text style={{ fontSize: 15, color: 'gray' }}>Simplify tasks, boost productivity</Text> // Mô tả cho tiêu đề
//                     <TouchableOpacity 
//                         style={{ backgroundColor: '#25C3D9', alignItems: 'center', borderRadius: 5, marginTop: 14, marginBottom: 10 }} // Nút "Sign up"
//                         onPress={() => navigation.navigate('Screen_02')} // Điều hướng đến Screen_02 khi nhấn
//                     >
//                         <Text style={{ color: 'white', fontSize: 18, padding: 14 }}>Sign up</Text> // Văn bản trong nút "Sign up"
//                     </TouchableOpacity>
//                     <TouchableOpacity 
//                         style={{ alignItems: 'center' }} // Nút "Login"
//                         onPress={() => navigation.navigate('Screen_03')} // Điều hướng đến Screen_03 khi nhấn
//                     >
//                         <Text style={{ fontSize: 18, color: 'gray' }}>Login</Text> // Văn bản trong nút "Login"
//                     </TouchableOpacity>
//                     <View style={{ alignItems: 'center', marginTop: 10 }}> // Container cho hình ảnh bên dưới
//                         <Image
//                             style={{ width: 46, height: 12 }} // Hình ảnh khác (cần thay thế đường dẫn)
//                             source={require('../assets/images/....png')} // Cần cập nhật đường dẫn đến hình ảnh
//                         />
//                     </View>
//                 </View>
//             </View>
//         </SafeAreaView>
//     );
// }

// // Định nghĩa kiểu dáng cho component
// const styles = StyleSheet.create({
//     container: {
//         flex: 1, // Chiếm toàn bộ không gian
//         alignItems: 'center', // Căn giữa nội dung theo chiều ngang
//         backgroundColor: 'white' // Màu nền trắng
//     }
// });
