import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "../Resultimc/style.js";

export default function Resultimc(props) {

    const onShare = async () => {
        const result = await Share.share({
            message: "Meu IMC hoje é: " + props.resultimc
        });
    }


    return (
        <View style={styles.contextimc}>
            <View style={styles.boxSharebutton}>
                <Text style={styles.information}>{props.messageResultimc}</Text>
                <Text style={styles.numberimc}>{props.resultimc}</Text>
                <TouchableOpacity onPress={onShare} style={styles.shared}>
                    <Text style={styles.sharedText}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
