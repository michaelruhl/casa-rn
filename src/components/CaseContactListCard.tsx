import React, { useState } from 'react';
import { styled } from 'nativewind';
import tw from 'tailwind-react-native-classnames';
import { View, Text, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import { useSelector, useDispatch } from 'react-redux';

import { toggleDetails } from '../slices/cardSlice'; // Import the toggleDetails action

const StyledView = styled(View);
const StyledButton = styled(Button);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const CaseContactListCard = ({ item, navigation }) => {
  const date = useSelector((state) => state.createScreen.date);
  const birthYear = item.birth_month_year_youth.substring(0, 4);
  const isButterfly = date.substring(0, 4) - birthYear;
  const emoji = isButterfly >= 14 ? '🦋' : '🐛';
  const dispatch = useDispatch();

  const { id, title, content, showDetails } = useSelector((state) =>
    state.card.cardComponents.find((card) => card.id === item.id)
  );

  const handleDetailsPress = () => {
    dispatch(toggleDetails({ cardId: id }));
  };

  const dateInCare = new Date(item.date_in_care);

  return (
    <TouchableOpacity style={tw`py-3`}>
      <TouchableOpacity
        className={`flex w-80 ${
          showDetails ? 'h-[230]' : 'h-[120]'
        } bg-[#ffffff] py-2 rounded-3xl justify-between items-center shadow-lg text-lg`}
        style={tw`shadow-lg text-lg`}
        onPress={() => {
          navigation.navigate('CaseContactDetail', item);
          console.log('THIS IS THE ITEM AFTER LIST BUTTON PRESS', item);
        }}>
        <StyledText className="text-bold text-2xl">{`${emoji} ${item.case_number}`}</StyledText>

        {showDetails && (
          <StyledView className="flex-row flex-1 p-2 ">
            <StyledView className="flex flex-1 justify-around">
              <StyledText className="text-bold">Case number:</StyledText>
              <StyledText className="text-bold">Transition Aged Youth:</StyledText>
              <StyledText className="text-bold">Youth's Date in Care:</StyledText>
              <StyledText className="text-bold">Court Report Status:</StyledText>
              <StyledText className="text-bold text-center">
                Court Report Submitted Date:
              </StyledText>
            </StyledView>
            <StyledView className="flex flex-1 items-end justify-around">
              <StyledText>{item.case_number}</StyledText>
              <StyledText>{emoji == '🦋' ? 'Yes' : 'No'}</StyledText>
              <StyledText>
                {item.date_in_care == null ? 'Not Found' : new Date(dateInCare).toDateString()}
              </StyledText>
              <StyledText>
                {item.court_report_status == 'submitted' ? 'Submitted' : 'Not Submitted'}
              </StyledText>
              <StyledText className="pt-4">
                {new Date(item.court_report_submitted_at).toDateString()}
              </StyledText>
            </StyledView>
          </StyledView>
        )}

        <StyledTouchableOpacity
          className="flex justify-center items-center bg-[#ea5a4e] text-white rounded-3xl w-[120] h-[35]"
          onPress={() => {
            handleDetailsPress();
          }}>
          <StyledText className="text-bold text-white text-lg">
            {showDetails ? 'Hide' : 'Details'}
          </StyledText>
        </StyledTouchableOpacity>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CaseContactListCard;
