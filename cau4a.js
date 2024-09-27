import { View, Image, Text, ScrollView, FlatList } from "react-native";
import ButtonChat from "./components/buttonChat";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import ShopItem from "./components/ShopItem";
import { useState, useEffect } from "react";

export default function Cau4a() {
    const [data, setData] = useState([]);

    async function getData() {
        const url = "https://66f5f8bb436827ced97590b0.mockapi.io/api/v1/items";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            return json;
        } catch (error) {
            console.error(error.message);
            
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await getData();
            setData(fetchedData);
        };
        fetchData();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: "#1BA9FF", flexDirection: "row", padding: 10, justifyContent: "space-between" }}>
                <AntDesign name="arrowleft" size={24} color="white" />
                <Text style={{ fontSize: 18, color: "white" }}>Chat</Text>
                <AntDesign name="shoppingcart" size={24} color="white" />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{ paddingHorizontal: 40, paddingVertical: 20, fontSize: 14, fontWeight: "500" }}>
                    Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
                </Text>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <ShopItem item={item} />} 
                    keyExtractor={item=>item.id}
                      showsVerticalScrollIndicator={false}
                />
            </ScrollView>
            <View style={{ backgroundColor: "#1BA9FF", flexDirection: "row", padding: 10, justifyContent: "space-between" }}>
                <AntDesign name="bars" size={24} color="black" />
                <AntDesign name="home" size={24} color="black" />
                <Ionicons name="return-up-back-sharp" size={24} color="black" />
            </View>
        </View>
    );
}
