import { styled } from 'nativewind';
import React from 'react';
import { View } from 'react-native';
// import { navigate } from '../navigationRef';

import Button from '../components/Button';

interface Props {
  navigation: any;
  style?: any;
  className?: string;
}

const StyledView = styled(View);
const StyledButton = styled(Button);

const BottomTabNavigator: React.FC<Props> = ({ style, navigation }) => {
  return (
    <StyledView style={style}>
      <StyledButton
        className="flex bg-[#ea5a4e] text-white rounded-3xl w-[120] h-[40]"
        title="My Cases"
        titleColor="white"
        onPress={() => navigation.navigate('caseContactListFlow', {})}
      />
      <StyledButton
        className="flex bg-[#ea5a4e] text-white rounded-3xl w-[90] h-[40]"
        title="Create"
        titleColor="white"
        onPress={() => navigation.navigate('CaseContactCreateFlow', {})}
      />
      <StyledButton
        className="flex bg-[#ea5a4e] text-white rounded-3xl w-[120] h-[40]"
        title="Account"
        titleColor="white"
        onPress={() => navigation.navigate('AccountFlow', {})}
      />
    </StyledView>
  );
};

export default BottomTabNavigator;
