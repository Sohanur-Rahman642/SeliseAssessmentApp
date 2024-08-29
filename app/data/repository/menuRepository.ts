import data from '../local/menu.json'
import { MenuResponse } from '../model/response/MenuResponse';

export const loadMenus = (): Promise<MenuResponse[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 1000);
    });
};