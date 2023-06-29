import React from 'react';
import { styled } from 'nativewind';
import tw from 'tailwind-react-native-classnames';

import { View, Text, TouchableOpacity } from 'react-native';

import Button from '../components/Button';

import { useSelector } from 'react-redux'


const StyledView = styled(View);
const StyledButton = styled(Button);
const StyledText = styled(Text);

const CaseContactListCard = ({ item, navigation }) => {

const date = useSelector(state => state.createScreen.date)
let emoji
  for (let i = 0; i < date.length; i++) {
    const birthYear = item.birth_month_year_youth.substring(0,4)
    const isButterfly = date.substring(0,4) - birthYear

    if (isButterfly >= 14) {
      emoji = '🦋'
    } else {
      emoji = '🐛'
    }
  }


  return (
    <TouchableOpacity style={tw`py-3`}>
      <StyledButton
        className="flex w-80 h-[60] bg-[#ffffff] text-black rounded-3xl font-bold"
        style={tw`shadow-lg text-lg`}
        title={`${emoji} ${item.case_number}`}
        titleColor="black"
        onPress={() => {navigation.navigate('CaseContactDetail', item); console.log('THIS IS THE ITEM AFTER LIST BUTTON PRESS',item)}}
      />
    </TouchableOpacity>
  );
};

export default CaseContactListCard;
