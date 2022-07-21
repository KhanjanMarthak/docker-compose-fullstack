import { useRef, useState } from "react";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  const username = useRef();
  const password = useRef();
  const authenticate = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: username.current.value,
        password: password.current.value,
      }),
    };
    const login_api = process.env.LOGIN_API;
    const response = await fetch(login_api, requestOptions);
    const data = await response.json();
    if (response.status == 200) {
      router.push("/home");
    } else router.push("/error/invalidCreds");
  };
  return (
    <>
      <div>
        Enter Username{" "}
        <input className="form-control" type="text" ref={username}></input>
      </div>
      <div>
        Password{" "}
        <input className="form-control" type="text" ref={password}></input>
      </div>
      <div>
        <button onClick={authenticate}>Login</button>
      </div>
    </>
  );
}
export default Login;
