import {
    View,
    Image,
    Text,
    ScrollView,
    TextInput,
    FlatList,
} from "react-native";
import Item from "./components/Item";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import { useState, useEffect } from "react";

export default function Cau4b() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(
                    "https://66f5f8bb436827ced97590b0.mockapi.io/api/v1/dayUSBs"
                );
                if (!response.ok) {
                    throw new Error("Fetch data failed");
                }
                const json = await response.json();
                return json;
            } catch (e) {
                console.log(e);
            }
        }

        const fetchData = async () => {
            const result = await getData();
            if (result) {
                setData(result);
            }
        };

        fetchData();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    backgroundColor: "#1BA9FF",
                    flexDirection: "row",
                    padding: 10,
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <AntDesign name="arrowleft" size={24} color="white" />
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "white",
                        borderRadius: 5,
                        paddingHorizontal: 5,
                    }}
                >
                    <AntDesign
                        name="search1"
                        size={24}
                        color="black"
                        style={{ marginRight: 5 }}
                    />
                    <TextInput
                        style={{
                            height: 36,
                            borderWidth: 0,
                            outlineWidth: 0,
                            padding: 0,
                            fontSize: 16,
                        }}
                        placeholder="Search"
                        placeholderTextColor="gray"
                    />
                </View>
                <AntDesign name="shoppingcart" size={24} color="white" />
                <Entypo name="dots-three-horizontal" size={24} color="white" />
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={data}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
            <View
                style={{
                    backgroundColor: "#1BA9FF",
                    flexDirection: "row",
                    padding: 10,
                    justifyContent: "space-between",
                }}
            >
                <AntDesign name="bars" size={24} color="black" />
                <AntDesign name="home" size={24} color="black" />
                <Ionicons name="return-up-back-sharp" size={24} color="black" />
            </View>
        </View>
    );
}
