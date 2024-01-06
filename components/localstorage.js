import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(initialValue);

    useEffect(() => {
        const stored = localStorage.getItem(key);
        setStoredValue(stored ? JSON.parse(stored) : initialValue);
    }, [key, initialValue]);

    const setValue = (value) => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
};