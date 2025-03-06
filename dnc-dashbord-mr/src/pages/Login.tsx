import styled from "styled-components";

const LoginArea = styled.div`
  background-color: #666;
`
const LoginImage = styled.img`
  background-image:url(/Image.svg);
  background-size: cover;
  height: 100vh;
  width: 110vh;
 `

 function Login() {


  return (
    <>
       <>
         <LoginArea>Login</LoginArea>
         <LoginImage/>
       </>
    </>
  )
}

export default Login