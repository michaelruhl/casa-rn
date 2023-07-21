import { createSlice } from '@reduxjs/toolkit';


const cardSlice = createSlice({
  name: 'card',
  initialState: {
    cardComponents: [],
  },
  reducers: {
    setCardComponents: (state, action) => {
      state.cardComponents = action.payload.map((item) => ({
        ...item,
        showDetails: false, // Add the showDetails property with initial value false
      }));
    },

    toggleDetails: (state, action) => {
      const { cardId } = action.payload;
      const cardComponent = state.cardComponents.find((item) => item.id === cardId);
      if (cardComponent) {
        cardComponent.showDetails = !cardComponent.showDetails;
      }
    },
  },
});

export const { setCardComponents, toggleDetails } = cardSlice.actions;
export default cardSlice.reducer;