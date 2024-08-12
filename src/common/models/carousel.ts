export const ADD_IMAGE_ITEM_KEY = 'addImageItem';

export const getIsAddImageItem = (item: any) => item && typeof item == 'object' && ADD_IMAGE_ITEM_KEY in item;

export const pushAddImageItem = (array: any[]) => [...array, { [ADD_IMAGE_ITEM_KEY]: true }];
