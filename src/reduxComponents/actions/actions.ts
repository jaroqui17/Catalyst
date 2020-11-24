import * as types from '../constants/actionTypes';




export const ConstructFileTree = (files: []) => ({
    type: types.CONSTRUCT_FILETREE,
    payload: files
});

export const SetFileView = (filePath: any) => ({
    type:types.SET_FILE_VIEW,
    payload: filePath
});

export const ToggleFolder = (filePath: string) => ({
    type: types.TOGGLE_FOLDER,
    payload: filePath
});

export const UpdateKeyOfExpect = () => ({
    type: types.UPDATE_KEY_OF_EXPECT,
    payload: ''
})

export const UpdateData = (data:any) => ({
    type: types.UPDATE_DATA,
    payload: data
})

export const UpdateKeyOfDesribe = () => ({
    type: types.UPDATE_KEY_OF_DESCRIBE,
    payload: ''
});

export const UpdateKeyOfIt = () => ({
    type: types.UPDATE_KEY_OF_IT,
    payload: ''
});

export const UpdateItObj = (data:any) =>({
    type: types.UPDATE_IT_OBJ,
    payload: data
})

export const UpdateDescribe = (data:any) =>({
    type: types.UPDATE_DESCRIBE,
    payload: data
})

export const UpdateComponentName = (name:any) =>({
    type: types.UPDATE_COMPONENT_NAME,
    payload: name
})

export const ClearFile = () =>({
    type: types.CLEAR_FILE
})

export const deleteExpect = (data: any) => ({
    type: types.DELETE_EXPECT,
    payload: data
})

export const removeFromIt = (data: any) => ({
    types: types.REMOVE_FROM_IT,
    payload: data
})