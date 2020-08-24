import forkify from '../apis/forkify';

export const fetchList = (query) => async (dispatch, getState) => {
    const response = await forkify.get(`/api/search?q=${query}`);
    dispatch({ type: 'FETCH_LIST', payload: response.data.recipes });
};

export const selectRecipe = (id) => {
    return {
        type: 'SELECT_RECIPE',
        payload: id
    };
};

export const fetchRecipe = (id) => async (dispatch, getState) => {
    const response = await forkify.get(`/api/get?rId=${id}`);
    dispatch({ type: 'FETCH_RECIPE', payload: response.data.recipe });
};