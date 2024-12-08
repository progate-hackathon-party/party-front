import "expo-router/entry";
import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    useColorScheme,
    View,
} from 'react-native';
import { Pressable, Image } from "react-native";
import "maplibre-gl/dist/maplibre-gl.css";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {router} from "expo-router";
import Mapbox, {Camera, MapView, PointAnnotation} from "@rnmapbox/maps";
import Geolocation, {GeolocationResponse} from '@react-native-community/geolocation';
import {RegionPayload} from "@rnmapbox/maps/src/components/MapView";
import {GeoJSON} from "geojson";

Mapbox.setAccessToken("pk.eyJ1IjoibW9ub2thbW8iLCJhIjoiY200ZWozbjFhMGJjdTJrb3VmMHk4ejhscSJ9.SaCvoIQ_-wXSpTI2oDsm6A");

function HomePage() {
    const isDarkMode = useColorScheme() === 'dark';
    const main_styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        },
        scrollView: {
            flexGrow: 1,
        },
        centerContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
        },
        map: {
            flex: 1
        }
    });

    const [location, setLocation] = useState<GeolocationResponse>();

    useEffect(() => {
        Geolocation.getCurrentPosition(
            position => setLocation(position),
            err => alert(err.message),
            { enableHighAccuracy: true, timeout: 3000000, maximumAge: 10000 },
        );
    }, []);

    const [visibleBounds, setVisibleBounds] = useState<Array<GeoJSON.Position>>();

    // ユーザーの視界が変わった時に座標を取得する
    const handleRegionChange = async (event:GeoJSON.Feature<GeoJSON.Point, RegionPayload>) => {
        const { visibleBounds } = event.properties;

        try{
            const result = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/posts/location`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    lat: [visibleBounds[1][1], visibleBounds[0][1]],
                    lon: [visibleBounds[1][0], visibleBounds[0][0]],
                }),
            })

            const data = await result.json();
            let posts:Array<GeoJSON.Position> = []

            data.posts.map((post) => {
                const position:GeoJSON.Position = [post.attribute_values.lon, post.attribute_values.lat]
                posts.push(position)
            })

            setVisibleBounds(posts);
        }catch (e){
            console.log(e)
        }
    };

    return (
        <>
        {location && location.coords
            ?<SafeAreaView style={main_styles.container}>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={main_styles.container.backgroundColor}
                />
                <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={main_styles.scrollView}>
                    <MapView style={main_styles.map}
                         onRegionDidChange={(event) => handleRegionChange(event)}
                    >
                        <Camera
                            defaultSettings={{ centerCoordinate: [location.coords.longitude, location.coords.latitude], zoomLevel: 15 }}
                        />
                        {visibleBounds
                            ?visibleBounds.map((position, index) => {
                                return (
                                    <PointAnnotation
                                        id={`pointAnnotation${index}`}
                                        coordinate={position}
                                    >
                                        <View style={styles.pinContainer}>
                                            <Image
                                                source={require("../assets/images/map_icon.png")} // ローカル画像を指定
                                                style={styles.image}
                                            />
                                        </View>
                                    </PointAnnotation>
                                );
                            })
                            :<SafeAreaView/>
                        }

                    </MapView>
                </ScrollView>
                {/* 右下に配置される要素 */}
                <View style={styles.container}>
                    <Pressable
                        style={styles.button}
                        onPress={() => {
                            router.push("/post")
                        }}
                    >
                        <Image
                            source={require("../assets/images/map_icon.png")} // ローカル画像を指定
                            style={styles.image}
                        />
                    </Pressable>
                </View>
            </SafeAreaView>
            :<SafeAreaView/>
        }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute", // 絶対位置を設定
        bottom: 20, // 下から20px
        right: 20, // 右から20px
    },
    button: {
        backgroundColor: "#D4D4FF",
        borderRadius: 50,
        padding: 15,
    },
    image: {
        width: 50, // 画像の幅
        height: 50, // 画像の高さ
        resizeMode: "contain", // 画像の比率を維持して縮小/拡大
    },
    pinContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomePage;
