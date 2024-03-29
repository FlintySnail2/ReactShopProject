import React,{Component} from "react";
import {View} from "react-native";

const HOMECATEGORIES=require('../json/homecategory.json');
import HomeCategory  from "../components/HomeCategory";

class Home extends Component{
    render(){
        return(
            <View>
               
               {
                   HOMECATEGORIES.map((item,index)=>{
                       return(
                           <HomeCategory  key={index} titleFirst={item.titleFirst} 
                                        titleSecond={item.titleSecond}
                                        subTitle={item.subTitle} 
                                        imageUri={item.imageUri}
                                        {...this.props}
                           >

                           </HomeCategory>
                       )
                   })
               }
            </View>
        )
    }
}

export default Home;