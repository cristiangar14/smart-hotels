export const useSessionStorage = (key:string): any | boolean => {
    const storedValue = sessionStorage.getItem(key);

    if (!storedValue?.length) {
        return false;
    } else {
        return storedValue;
    }
}