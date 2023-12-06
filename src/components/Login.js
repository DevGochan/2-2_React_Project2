import { useState } from "react";
import { auth } from "./firebaseinit";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Login() {
    const [userData, setUserData] = useState(null);

    function handleLogin() {
        // 구글 계정으로 로그인 처리
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)  // 로그인 할 수 있게 창을 띄워줌
            .then((data) => { // 로그인 성공한 값이 data로 들어와 있음
                setUserData(data.user);
            })
            .catch((err) => console.log("Login Error: " + err)) // catch는 문제가 발생했을때 사용
    }
    return(
        <div>
            <button onClick={handleLogin}>Google Login</button>
            <p>Username: {userData ? userData.displayName : null}</p> {/* 데이터가 있으면 출력해주고 없으면 null 출력 */}
        </div>
    );
}