import { Text, View, Image } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Item({ item, ...props }) {
  return (
    <View {...props} style={{ width: "50%", padding: 10, gap: 5 }}>
      <Image 
        source={{uri:item.image}} 
        style={{ width: '100%', height: 100, borderRadius: 5 }} 
      />
      <View style={{padding:20,gap:5}}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={{fontWeight:600}}>{item.name}</Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <AntDesign name="star" size={12} color="yellow" />
          <AntDesign name="star" size={12} color="yellow" />
          <AntDesign name="star" size={12} color="yellow" />
          <AntDesign name="star" size={12} color="yellow" />
          <AntDesign name="star" size={12} color="gray" />
        </View>
        <Text style={{fontSize:12}}>(15)</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
        <Text style={{ fontWeight: "600" }}>{item.price.toLocaleString()}đ</Text>
        <Text style={{ color: "gray" }}>-{item.discount}%</Text>
      </View>
      </View>
    </View>
  );
}
