import { useLocalStorage } from './useLocalStrorage';

export const useDarkMode = (initialValue) => {
    const [value, setValue] = useLocalStorage("darkMode", initialValue);    

    return [value, setValue];
}