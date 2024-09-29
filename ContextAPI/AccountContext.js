import { createContext, useContext, useState } from "react";


const AccountContext = createContext();

export function useAccount() {
    return useContext(AccountContext);
}

export function AccountProvider({ children }) {
    const [accounts, setAccounts] = useState([]);

    const addAccount = (account) => {
        setAccounts([...accounts, account])
    }

    const checkAccount = (email, password) => {
        return accounts.some(acc => acc.email === email && acc.password === password);
    }

    

    return (
        <AccountContext.Provider value={{accounts, addAccount, checkAccount}}>
            { children }
        </AccountContext.Provider>
    );
}

// import { createContext, useContext, useState } from "react";

// // Tạo một context mới để quản lý tài khoản
// const AccountContext = createContext();

// // Custom hook để sử dụng AccountContext
// export function useAccount() {
//     return useContext(AccountContext); // Trả về giá trị của context
// }

// // Provider component để cung cấp state và các hàm cho các component con
// export function AccountProvider({ children }) {
//     const [accounts, setAccounts] = useState([]); // Khởi tạo state lưu trữ danh sách tài khoản

//     // Hàm thêm tài khoản vào danh sách
//     const addAccount = (account) => {
//         setAccounts([...accounts, account]); // Cập nhật danh sách tài khoản bằng cách thêm tài khoản mới
//     };

//     // Hàm kiểm tra xem tài khoản có tồn tại hay không
//     const checkAccount = (email, password) => {
//         // Sử dụng some để kiểm tra có tài khoản nào khớp với email và password
//         return accounts.some(acc => acc.email === email && acc.password === password);
//     };

//     // Trả về Provider với giá trị là state và các hàm
//     return (
//         <AccountContext.Provider value={{ accounts, addAccount, checkAccount }}>
//             {children} // Các component con sẽ có quyền truy cập vào giá trị này
//         </AccountContext.Provider>
//     );
// }
