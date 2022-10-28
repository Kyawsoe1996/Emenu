import { useContext } from "react";
import axios from "../../apiService/axios";
import EmenuAPIservice from "../../apiService/EmenuAPIservice";
import BusinessContext from "../../CONTEXT/BusinessContext";
import { categoryActions } from "./category-slice";





export const CategoriesDataFetch=(businessID)=> {
 
   
    return async (dispatch) => {

        const sendGetRequest = async () => {
                
                const response= await EmenuAPIservice.getSpecifiBusinessCategoryList(businessID).then(res=>{
                   
                    const categoriesData= res.data
                    return categoriesData
                }).catch(error=> {
                    // its always show erros for this on console. so i turned off for now
                    console.log(error,"For categorylist fetch,Coz initial not getting business Id and after first redner useEffect dependancy")
                });

                const categoriesData = await response
                return categoriesData
               
                
          
        };

        const CategoriesData = await sendGetRequest()
        dispatch(categoryActions.replaceCategory(CategoriesData))

       
        
       
    }
}
