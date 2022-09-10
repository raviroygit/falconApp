import create from 'zustand';
import axios from 'axios';
import {devtools, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';


const courseStore = (set:any) => ({
    
    redeemDetails:{},
    getRedeemDetails:async(scannedResult:any)=>{
        const config = {
            headers: { Authorization: `Bearer ${await AsyncStorage.getItem('token')}` }
          };
        const response = await axios.post(`https://ck3ppye3ri.execute-api.us-east-1.amazonaws.com/dev/redeem-points`,scannedResult,config);
        set({redeemDetails:await response.data});
    },
    resetRedeemDetails:()=>{
        set({redeemDetails:{}})
    }
});


const useCourseStore = create(
    devtools(
        persist(courseStore, {
            name: "redeemDetails",
        })
    )
);

export default useCourseStore;