import { businessActions } from "./business-slice"
import EmenuAPIservice from "../../apiService/EmenuAPIservice";
// import axios from "../../apiService/axios";
import axios from "axios";





export const BusinessDataFetch=()=> {
    return async (dispatch) => {

        const sendGetRequest = async () => {
            
                const response= await EmenuAPIservice.getAllBusinessList().then(res=>{
                   //get single business
                    const businessData= res.data[0]
                    return businessData
                }).catch(error=> {
                    console.log(error)
                });

                const businessData = await response
                return businessData
               
                
          
        };

        const BusinessData = await sendGetRequest()
        dispatch(businessActions.setBusiness(BusinessData))

        // const getData = async ()=> {
        //     EmenuAPIservice.getAllBusinessList().then(res=>{
        //         const businessData = res.data
        //         console.log(businessData)
        //         console.log("getting business Data",businessData)
        //         dispatch(businessActions.setBusiness(businessData))
            
        //     }).catch(err=> {
        //         console.log(err)
        //     })
            
        // }
        // try{
        //     const cartData = await getData()
        //     dispatch(cartActions.replaceData(cartData))
    
        // }catch(error){
        //     dispatch(uiActions.showNotification({
        //         open:true,
        //         message:"Data Fetch Failed",
        //         type:"error"
        //     }))
        // }
        
       
    }
}