// import React,{Component} from "react";
// import {View,Text} from "react-native";

// import ProductItem from "../components/ProductItem";

// class Category extends Component{
//     constructor(props){
//         super(props);

//         this.state={
//             currentName:'',
//             currentIndex:0
//         }
//     }

   

//     getSubCategories=(categoryName)=>{
//         var subCategories=[];
//         if(categoryName.toLowerCase()=="mens"){
//           subCategories=require('../json/category-mens.json');
//         }
//         else if(categoryName.toLowerCase()=="womens"){
//             subCategories=require('../json/category-womens.json');
//         }
//         else if(categoryName.toLowerCase()=="kids"){
//           subCategories=require('../json/category-kids.json');
//        }
//        else if(categoryName.toLowerCase()=="accessories"){
//         subCategories=require('../json/category-accessories.json');
  
//        //subCategories=require(`../json/category-${categoryName.toLowerCase()}.json`);
//        console.log(subCategories);
//        return subCategories;
//     }

//     renderSubCategories=(categoryName)=>{
//       console.log("this is rendersubcategories method");

//       //we need to get sub categories based on categoryName
//     console.log(categoryName);
     
//      var subCategories=this.getSubCategories(categoryName);
//         return(
//             subCategories.map((item,i)=>{
//                 return(
//                     <Text onPress={
//                         ()=>this.setState({
//                             currentName:item,
//                             currentIndex:i
//                         })

//                     } style={{paddingLeft:5,paddingRight:5, color:this.state.currentIndex==i?"white":"black"}} >{item}</Text>
//                 )
//             })
//         )

//     }

//     getProductList=(categoryName,subCategoryName)=>{
//         console.log(categoryName);
//         console.log(subCategoryName);


//         var products=[];

//         products=require('../json/product-'+categoryName.toLowerCase()+'-'+subCategoryName.toLowerCase()+'.json');
//         return products;
//     }

//     renderProductsList=(categoryName)=>{
//         console.log("renderProductsList");

//         //get all the subcategories related to main category
//         var subCategories=this.getSubCategories(categoryName);

//         var subCategoryName=subCategories[0];

//         if(this.state.currentName!=''){
//             subCategoryName=this.state.currentName
//         }

//         var products=this.getProductList(categoryName,subCategoryName);
//         console.log(products);

//         return(
//             products.map((item,i)=>{
//                 return(
//                    <ProductItem id={item.id} imageUri={item.imageUri} name={item.name} 
//                    priceOne={item.priceOne} priceTwo={item.priceTwo} 
//                     onPress={()=>this.props.navigation.navigate("ProductDetail",{
//                         id:item.id,
//                         name:item.name,
//                         imageUri:item.imageUri,
//                         priceOne:item.priceOne,
//                         priceTwo:item.priceTwo
//                     })}></ProductItem>
//                 )
//             })
//         )

//     };

//     render(){
//         const {categoryName}=this.props.route.params;
//         return(
//             <View>
//                <View style={{backgroundColor:'grey',color:'black',paddingTop:10,paddingBottom:10}}>
//                     <View style={{flexDirection:'row',alignItems:'center'}}>
//                         {
//                             this.renderSubCategories(categoryName)
//                         }
//                     </View>
//                </View>
//                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
//                    {
//                        this.renderProductsList(categoryName)
//                    }
//                </View>
              
//             </View>
//         )
//     };
// }
// }

// export default Category;

import React,{Component} from "react";
import {View,Text} from "react-native";

import ProductItem from "../components/ProductItem";

class Category extends Component{
    constructor(props){
        super(props);

        this.state={
            currentName:'',
            currentIndex:0
        }
    }

   

    getSubCategories=(categoryName)=>{
                var subCategories=[];
                if(categoryName.toLowerCase()=="mens"){
                  subCategories=require('../json/category-mens.json');
                }
                else if(categoryName.toLowerCase()=="womens"){
                    subCategories=require('../json/category-womens.json');
                }
                else if(categoryName.toLowerCase()=="kids"){
                  subCategories=require('../json/category-kids.json');
               }
               else if(categoryName.toLowerCase()=="accessories"){
                subCategories=require('../json/category-accessories.json');
          
               //subCategories=require(`../json/category-${categoryName.toLowerCase()}.json`);
               
            }
            console.log(subCategories);
               return subCategories;
        };

    renderSubCategories=(categoryName)=>{
      console.log("this is renderSubCategories method");

      //we need to get sub categories based on categoryName
    console.log(categoryName);
     
     var subCategories=this.getSubCategories(categoryName);
     console.log(subCategories)
        return(
            subCategories.map((item,i)=>{
                return(
                    <Text onPress={
                        ()=>this.setState({
                            currentName:item,
                            currentIndex:i
                        })

                    } style={{paddingLeft:5,paddingRight:5, color:this.state.currentIndex==i?"white":"black"}} >{item}</Text>
                )
            })
        )

    }

    getProductList=(categoryName,subCategoryName)=>{
        console.log(categoryName);
        console.log(subCategoryName);
        var products=[];
        
        if(categoryName.toLowerCase()=="mens"){
            if(subCategoryName.toLowerCase()=="watches"){
                products=require('../json/product-mens-watches.json');
            }
            else if(subCategoryName.toLowerCase()=="shoes"){
              products=require('../json/product-mens-shoes.json');
          }
        }
        if(categoryName.toLowerCase()=="womens"){
            if(subCategoryName.toLowerCase()=="dresses"){
                products=require('../json/product-womens-dresses.json');
            }
            else if(subCategoryName.toLowerCase()=="shoes"){
              products=require('../json/product-womens-shoes.json');
          }
        }
        if(categoryName.toLowerCase()=="kids"){
            if(subCategoryName.toLowerCase()=="pants"){
                products=require('../json/product-kids-pants.json');
            }
            else if(subCategoryName.toLowerCase()=="shoes"){
              products=require('../json/product-kids-shoes.json');
          }
        }
        if(categoryName.toLowerCase()=="accessories"){
            if(subCategoryName.toLowerCase()=="belts"){
                products=require('../json/product-accessories-belts.json');
            }
            else if(subCategoryName.toLowerCase()=="headwear"){
              products=require('../json/product-accessories-headwear.json');
          }
        }
        return products;
    }
 

    renderProductsList=(categoryName)=>{
        console.log("renderProductsList");

        //get all the subcategories related to main category
        var subCategories=this.getSubCategories(categoryName);

        var subCategoryName=subCategories[0];

        if(this.state.currentName!=''){
            subCategoryName=this.state.currentName
        }

        var products=this.getProductList(categoryName,subCategoryName);
        console.log(products);

        return(
            products.map((item,i)=>{
                return(
                   <ProductItem id={item.id} imageUri={item.imageUri} name={item.name} 
                   priceOne={item.priceOne} priceTwo={item.priceTwo} 
                    onPress={()=>this.props.navigation.navigate("ProductDetail",{
                        id:item.id,
                        name:item.name,
                        imageUri:item.imageUri,
                        priceOne:item.priceOne,
                        priceTwo:item.priceTwo
                    })}></ProductItem>
                )
            })
        )

    }


    render(){
        const {categoryName}=this.props.route.params;
        return(
            <View>
               <Text>This is category screen {categoryName}</Text>

               <View style={{backgroundColor:'grey',color:'black',paddingTop:10,paddingBottom:10}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        {
                            this.renderSubCategories(categoryName)
                        }
                    </View>
               </View>
               <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                   {
                       this.renderProductsList(categoryName)
                   }
               </View>
              
            </View>
        )
    }
}

export default Category;