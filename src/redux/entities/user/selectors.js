const selectUserModule = state => state.user;

export const selectUserById = (state, id) => selectUserModule(state).entities[id];

export const selectUserTextById = (state, id) => selectUserById(state, id).text;

export const selectUserIds = state => selectUserModule(state).ids;
