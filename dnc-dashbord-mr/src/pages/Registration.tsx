import styled from "styled-components";

const RegistrationArea = styled.div`
  background-color: #333;
`
const RegistrationImage = styled.img`
  background-image:url(/Image.svg);
  background-size: cover;
  height: 100vh;
  width: 110vh;
 `

 function Registration() {


  return (
    <>
       <>
         <RegistrationArea>Registro</RegistrationArea>
         <RegistrationImage/>
       </>
    </>
  )
}

export default Registration