//Business logic for transforming raw data into displayable info lives in selector

import { createSelector } from 'reselect';

//Memoization - using the cache to avoid rerenders of elements that haven't changed

//input selector, gets the 'slice' of the root-reducer that is needed, in this case, categories
const selectCategoryReducer = (state) => {
	return state.categories;
};

export const selectCategories = createSelector(
	//1st arg: array of input selectors (functions that return a portion of the state)
	[selectCategoryReducer],
	//2nd arg: output selector, function that takes the outputs of 1st arg's array items as args
	//2nd arg will not run unless 1st arg changes
	(categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector([selectCategories], (categories) =>
	categories.reduce((accumulator, category) => {
		const { title, items } = category;
		accumulator[title.toLowerCase()] = items;
		return accumulator;
	}, {})
);
