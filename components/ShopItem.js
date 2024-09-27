import {View,Image,Text} from "react-native"
import ButtonChat from "./buttonChat"
export default function ShopItem({item}){
  return(
    <View  style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center", borderTopWidth:1,borderColor:"#ccc"}}>
            
            
            <View style={{flexDirection:"row",justifyContent:"space-between",gap:20, alignItems:"center"}}>
            <Image source={{uri:item.image}} style={{width:70,height:70}}/>
            <View>
              <Text style={{fontSize:14,fontWeight:600, maxWidth:150}}  numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
              <Text style={{color:"gray"}}>Shop:<Text style={{color:"black"}}> {item.shopName}</Text></Text>
            </View>
            </View>

            <ButtonChat/>
          </View>
  )
}