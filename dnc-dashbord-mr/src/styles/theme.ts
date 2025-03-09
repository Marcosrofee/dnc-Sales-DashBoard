import { Theme } from "@/types"

export const lighTheme: Theme = {
    appBackground: '#FFF',
    appColor: '#000',
    appDefaultStroke: '#E0E0E0',
    appLogo: 'LoginBlack.svg',
    appSkeletonFrom: '#eee',
    appSkeletonTo:'#CCC',
    buttons:{
        alert:'#E80000',
        alertColor:'#FFF',
        alertHover:'#D80000',
        disabled:'#CCC',
        disabledColor:'#666',
        primary:'rgba(12, 112, 242, 1)',
        primaryColor:'#FFF',
        primaryHover:'#0061DE',
        
    },
    card:{
        alert:'#E80000',
        background:'#FFF',
        border:'#E0E0E0',
        success:'#008000',
        warning:'#F7A3000',
    },
    textInput:{
        active:'#FFF',
        activeColor:'#000',
        border:'#E0E0E0',
        disabled:'#EEE',
        disableBorderColor:'#E0E0E0',
        disableColor:'#666',
        placeholderColor:'#666',
    },
    typography:{
        error:'#FF0202',
        subtitle:'#666',
        success:'#008000',
    }

}
export const darkTheme: Theme = {
    appBackground: '#060B26',
    appColor: '#FFF',
    appDefaultStroke: '#21497D',
    appLogo: 'LoginWhite.svg',
    appSkeletonFrom: '#060B26',
    appSkeletonTo:'#21497D',
    buttons:{
        alert:'#E80000',
        alertColor:'#FFF',
        alertHover:'#D80000',
        disabled:'#313649',
        disabledColor:'#6D7B8E',
        primary:'#C70F2',
        primaryColor:'#FFF',
        primaryHover:'#0061DE',
        
    },
    card:{
        alert:'#E80000',
        background:'#0F1535',
        border:'#21497D',
        success:'#008000',
        warning:'#F7A3000',
    },
    textInput:{
        active:'#0F1535',
        activeColor:'#FFF',
        border:'#21497D',
        disabled:'#282D49',
        disableBorderColor:'#2E3F55',
        disableColor:'#58677C',
        placeholderColor:'#89A7CE',
    },
    typography:{
        error:'#FF0202',
        subtitle:'#89A7CE',
        success:'#008000',
    }

}