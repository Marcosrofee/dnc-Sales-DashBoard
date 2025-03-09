
import { Box,Container,Grid } from "@mui/material";
import { BannerImage, StyledH1, StyledP, StyledUl,Logo } from "@/components"; 
import { pxToRem } from "@/utils";
import FormComponent from "@/components/FormComponent";

 function Registration() {


   return (
     <>
       <Box>
         <Grid container >
           <Grid item xs={12} sm={6} sx={{alignItems:'center', display:'flex', height:'100vh'}}>
             
             <Container maxWidth="sm">
               <Box sx={{marginBottom: pxToRem(24)}}>
                 <Logo height={41} width={100} />
               </Box>
               <Box>
                 <StyledH1>Faça seu Cadastro</StyledH1>
                 <StyledP>Primeiro, diga-nos quem você é.</StyledP>
                 <StyledUl>
                   <li>Entre 8 e 16 caracteres,</li>
                   <li>Pelo menos uma letra maiúscula;</li>
                   <li>Pelo menos um caractere especial.</li>
                   <li>Pelo menos um número</li>
                 </StyledUl>
               </Box>
               
                 <FormComponent
                   inputs={[
                     { type: 'email', placeholder: 'Email' },
                     { type: 'password', placeholder: 'Password' }
                   ]}
              buttons={[
                {className:'primary',type:'submit',children:'Login'}
               ]}
               message={{
                msg:'Success!!!',
                type:'success'
               }}/>
             </Container>
         </Grid>                              
           <Grid item  sm={6} sx={{display:{xs: 'none', sm: 'block'}}}>
             <BannerImage/>                                             
           </Grid>
         </Grid>           
       </Box>
       
     </>
    
  )
}

export default Registration