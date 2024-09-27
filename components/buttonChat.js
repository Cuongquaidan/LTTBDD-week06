import {Text,Pressable} from "react-native"

export default function ButtonChat(){
  return (
    <Pressable style={{paddingHorizontal:30,paddingVertical:5,maxHeight:40,backgroundColor:"red",justifyContent:"center"}}>
        <Text style={{color:"white",fontSize:16}}>
          Chat
        </Text>
    </Pressable>

  )
}