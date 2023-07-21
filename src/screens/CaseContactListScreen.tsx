import React, { useEffect, useState } from 'react';
import { styled } from 'nativewind';
import tw from 'tailwind-react-native-classnames';

import { View, Text, FlatList } from 'react-native';

import BottomTabNavigator from '../components/BottomTabNavigator';
import CaseContactListCard from '../components/CaseContactListCard';

import useFetch from '../helper/hooks/useFetch';

import { useSelector, useDispatch } from 'react-redux';
import { setCardComponents } from '../slices/cardSlice';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledFlatList = styled(FlatList);

const CaseContactListScreen = ({ navigation }) => {
  const [selectedContact, setSelectedContact] = useState();
  const { data, isLoading, error, refetch } = useFetch(`casa_cases`);

  // const cardComponents = useSelector((state) => state.cards.cardComponents);
  const cardComponents = useSelector((state) => state.card.cardComponents);
  console.log(cardComponents);

  return (
    <StyledView className="flex items-center gap-3 flex-1 bg-[#d5d7da]">
      <StyledView className="flex-col justify-center h-1/6">
        <StyledText className="text-3xl font-bold">MY CASES</StyledText>
      </StyledView>
      <StyledView className="flex items-center h-4/6">
        <StyledView
          className="flex flex-row h-10 bg-[#c0c5cd] justify-between w-80"
          style={tw`shadow-lg`}>
          <StyledText className="pl-2 text-xl font-bold">Filter By</StyledText>
          <StyledText className="pr-2 text-xl font-bold">Show/Hide</StyledText>
        </StyledView>
        <StyledView className="flex flex-1 flex-col justify-center my-10 h-80">
          {!isLoading ? (
            <StyledFlatList
              data={cardComponents}
              renderItem={({ item }) => <CaseContactListCard item={item} navigation={navigation} />}
              keyExtractor={(item) => item.id.toString()}
            />
          ) : (
            <StyledText className="text-3xl font-bold">Loading...</StyledText>
          )}
        </StyledView>
      </StyledView>
      <BottomTabNavigator
        className="flex-row pb-10 items-center justify-around h-1/6 w-screen bg-[#345073]"
        navigation={navigation}
      />
    </StyledView>
  );
};

export default CaseContactListScreen;
