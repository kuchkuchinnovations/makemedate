import React from 'react';
import {TouchableOpacity,Text,View,SafeAreaView,ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from  './style';

const Login = () =>{
    return(
        <SafeAreaView>
            <ScrollView showsHorizontalScrollIndicator showsVerticalScrollIndicator >
                <LinearGradient style = {styles.container} colors={['#4c669f', '#3b5998', '#192f6a']}>
                    <Text>Welcome to makemedate nqknsowdodldoijdoewjjoieijjfoiejfioejfiooejfoiejfoiejfpieijfpejfijfejfieijfpejfpejfpejefpowej</Text>
                </LinearGradient>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login;
