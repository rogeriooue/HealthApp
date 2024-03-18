import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration, Keyboard, Pressable, FlatList } from "react-native";
import Resultimc from "../Form/Resultimc/index.js";
import styles from "../Form/style.js";

export default function Form() {

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("preencha o peso e altura");
    const [Imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);
    const [imcList, setImcList] = useState([]);

    function imcCalculator() {
        let heightFormat = height.replace(",", ".");
        let weightFormat = weight.replace(",", ".");
        let totalImc = (weightFormat / (heightFormat * heightFormat)).toFixed(2);
        setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc }]);
        setImc(totalImc);
    }

    function verificationImc() {
        if (Imc == null) {
            Vibration.vibrate();
            setErrorMessage("campo obrigatório*");
        }
    }

    function validationImc() {
        console.log(imcList);
        if (weight != null && height != null) {
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu IMC é igual a:");
            setTextButton("Calcular Novamente!");
            setErrorMessage(null);
        } else {
            verificationImc();
            setImc(null);
            setTextButton("Calcular");
            setMessageImc("Preencha o peso e altura");
        }
    }


    return (
        <View style={styles.formContext}>
            {Imc == null ?
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setHeight}
                        value={height}
                        placeholder="Ex.: 1.75"
                        keyboardType="numeric">
                    </TextInput>

                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setWeight}
                        value={weight}
                        placeholder="Ex.: 75.35"
                        keyboardType="numeric">
                    </TextInput>
                    <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={() => { validationImc() }}>
                        <Text style={styles.textbuttonCalculator}>{textButton}
                        </Text>
                    </TouchableOpacity>
                </Pressable>
                :
                <View style={styles.exhibitionResultImc}>
                    <Resultimc
                        messageResultimc={messageImc} resultimc={Imc}
                    ></Resultimc>
                    <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={() => validationImc()}
                        title={textButton}>
                        <Text style={styles.textbuttonCalculator}>{textButton}
                        </Text>
                    </TouchableOpacity>
                </View>
            }
            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.listImcs}
                data={imcList.reverse()}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.resultImcItem}>
                            <Text style={styles.textResultItem}>Resultado IMC =  </Text>
                            { item.imc }
                        </Text>
                    );
                }}
                keyExtractor={(item) => {
                    item.id;
                }}
            >
            </FlatList>
        </View>
    );
}