import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [user_name, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setComfirmPassword] = useState('')
  const [registerMessage, setRM] = useState('')
  const [hashed, setHashed] = useState('')

  const handleClick = async () => {
    if (password === confirmPassword){
      const response = await fetch('http://localhost:5000/api/hash', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({user_name,password}),
      })
  
      const data = await response.json() 
      if(response.ok){
        setRM('注册成功！')
        //window.open("https://www.xvideos.com","_blank")
      }else{
        if (data.error?.includes("already exists")) {
          alert("用户名已存在，请换一个试试");
          //window.open("https://www.gaymaletube.com","_blank")
        }else{
            alert("注册失败：" + (data.error || "未知错误"));
        }
      }
    }else{
      setRM('确认密码不一致,请重新输入！')
    }
  }
  
  return (<div>
      <h2>请输入用户名</h2>
      <input
        type="text"
        value={user_name}
        onChange={e => setUserName(e.target.value)}
      />
      <h2>请输入密码</h2>
      <input
        type="text"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <h2>再次确认你的密码</h2>
      <input
        type="text"
        value={confirmPassword}
        onChange={e => setComfirmPassword(e.target.value)}
      />
      <button onClick={handleClick}>注册</button>
      {registerMessage && <p>{registerMessage}</p>}
    </div>
  );
}