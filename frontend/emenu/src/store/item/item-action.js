import EmenuAPIservice from "../../apiService/EmenuAPIservice";
import { itemActions } from "./item-slice";
export const CategoryBaseItemFetch=(category)=> {
 
   
    return async (dispatch) => {

        const sendGetRequest = async () => {
                
                const response= await EmenuAPIservice.getAllItemsInSpecificCategory(category).then(res=>{
                   

                    
                    const itemsData= res.data
                    return itemsData
                }).catch(error=> {
                    console.log(error)
                });

                const itemsData = await response
                return itemsData
               
                
          
        };

        const itemsData = await sendGetRequest()

        dispatch(itemActions.setItemData(itemsData))
        
        // dispatch(itemActions.setGettingItemsToQuantity1())

       
        
       
    }
}
