// import { createSelector } from 'reselect';
export const selectCategoriesMap = (state) => state.categories.categoriesMap;

// export const selectCategoriesIsLoading = createSelector(
//   [selectCategoryReducer],
//   (categoriesSlice) => categoriesSlice.isLoading
// );

// import { createSelector } from 'reselect';

// const selectCategoryReducer = (state) => state.categories;

// export const selectCategories = createSelector(
//   [selectCategoryReducer],
//   (categoriesSlice) => categoriesSlice.categories
// );

// export const selectCategoriesMap = createSelector(
//   [selectCategories],
//   (categories) =>
//     categories.reduce((acc, category) => {
//       const { title, items } = category;
//       acc[title.toLowerCase()] = items;
//       return acc;
//     }, {})
// );

// export const selectIsLoading = createSelector(
//   [selectCategoryReducer],
//   (categoriesSlice) => categoriesSlice.isLoading
// );
