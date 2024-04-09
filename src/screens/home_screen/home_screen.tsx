import {Pressable, Text, TextInput, TouchableOpacity, View} from 'react-native';
import HomeStyle from '../../styles/home_style/home_style';
import ButtonStyle from '../../styles/button_style/button_style';
import TextStyle from '../../styles/text_style/text_style';
import React from 'react';
import * as math from 'mathjs';
import TextInputStyle from '../../styles/textinput_style/textinput_style';

const HomeScreen = () => {
  const [value, setValue] = React.useState('');
  const handleButtonPress = (button: any) => {
    switch (button) {
      case 'AC':
        setValue('');
        break;
      case '%':
        setValue(math.evaluate(`${value}/100`));
        break;
      case '=':
        try {
          const result = math.evaluate(value);
          setValue(result.toString());
        } catch (error) {
          setValue('Error');
        }
        break;
      default:
        setValue(value + button);
    }
  };
  return (
    <View style={HomeStyle.main}>
      <View style={TextInputStyle.textInputView}>
        <TextInput
          multiline={false}
          showSoftInputOnFocus={false}
          numberOfLines={1}
          placeholder="0"
          style={TextStyle.textInputText}
          placeholderTextColor={'#d4d4d2'}
          value={value}
        />
      </View>
      <View style={HomeStyle.ButtonView}>
        {/* AC */}
        <Pressable
          style={ButtonStyle.smallPressable1}
          onPress={() => handleButtonPress('AC')}>
          <Text style={TextStyle.buttonText2}>AC</Text>
        </Pressable>
        {/* +/- */}
        <Pressable style={ButtonStyle.smallPressable1}>
          <Text style={TextStyle.buttonText2}>+/-</Text>
        </Pressable>
        {/* % */}
        <Pressable
          style={ButtonStyle.smallPressable1}
          onPress={() => handleButtonPress('%')}>
          <Text style={TextStyle.buttonText2}>%</Text>
        </Pressable>
        {/* ÷ */}
        <Pressable
          style={ButtonStyle.smallPressable2}
          onPress={() => handleButtonPress('/')}>
          <Text style={TextStyle.buttonText1}>÷</Text>
        </Pressable>
        {/* 7 */}
        <Pressable
          style={ButtonStyle.smallPressable}
          onPress={() => handleButtonPress('7')}>
          <Text style={TextStyle.buttonText1}>7</Text>
        </Pressable>
        {/* 8 */}
        <Pressable
          style={ButtonStyle.smallPressable}
          onPress={() => handleButtonPress('8')}>
          <Text style={TextStyle.buttonText1}>8</Text>
        </Pressable>
        {/* 9 */}
        <Pressable
          style={ButtonStyle.smallPressable}
          onPress={() => handleButtonPress('9')}>
          <Text style={TextStyle.buttonText1}>9</Text>
        </Pressable>
        {/* x */}
        <Pressable
          style={ButtonStyle.smallPressable2}
          onPress={() => handleButtonPress('*')}>
          <Text style={TextStyle.buttonText3}>x</Text>
        </Pressable>
        {/* 4 */}
        <Pressable
          style={ButtonStyle.smallPressable}
          onPress={() => handleButtonPress('4')}>
          <Text style={TextStyle.buttonText1}>4</Text>
        </Pressable>
        {/* 5 */}
        <Pressable
          style={ButtonStyle.smallPressable}
          onPress={() => handleButtonPress('5')}>
          <Text style={TextStyle.buttonText1}>5</Text>
        </Pressable>
        {/* 6 */}
        <Pressable
          style={ButtonStyle.smallPressable}
          onPress={() => handleButtonPress('6')}>
          <Text style={TextStyle.buttonText1}>6</Text>
        </Pressable>
        {/* - */}
        <Pressable
          style={ButtonStyle.smallPressable2}
          onPress={() => handleButtonPress('-')}>
          <Text style={TextStyle.buttonText3}>-</Text>
        </Pressable>
        {/* 1 */}
        <Pressable
          style={ButtonStyle.smallPressable}
          onPress={() => handleButtonPress('1')}>
          <Text style={TextStyle.buttonText1}>1</Text>
        </Pressable>
        {/* 2 */}
        <Pressable
          style={ButtonStyle.smallPressable}
          onPress={() => handleButtonPress('2')}>
          <Text style={TextStyle.buttonText1}>2</Text>
        </Pressable>
        {/* 3 */}
        <Pressable
          style={ButtonStyle.smallPressable}
          onPress={() => handleButtonPress('3')}>
          <Text style={TextStyle.buttonText1}>3</Text>
        </Pressable>
        {/* + */}
        <Pressable
          style={ButtonStyle.smallPressable2}
          onPress={() => handleButtonPress('+')}>
          <Text style={TextStyle.buttonText3}>+</Text>
        </Pressable>
        {/* 0 */}
        <Pressable
          style={ButtonStyle.largePressable}
          onPress={() => handleButtonPress('0')}>
          <Text style={TextStyle.buttonText1}>0</Text>
        </Pressable>
        {/* . */}
        <Pressable
          style={ButtonStyle.smallPressable}
          onPress={() => handleButtonPress('.')}>
          <Text style={TextStyle.buttonText1}>.</Text>
        </Pressable>
        {/* = */}
        <Pressable
          style={ButtonStyle.smallPressable2}
          onPress={() => handleButtonPress('=')}>
          <Text style={TextStyle.buttonText3}>=</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;
