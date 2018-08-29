export const increase = () => ({ type: 'INCREASE' });

export const decrease = () => ({ type: 'DECREASE' });

export const reset = () => ({ type: 'RESET' });

export const setFirst = () => ({type: 'isFirst' });

export const notFirst = () => ({type: 'notFirst' });

export const login = (user, instructor, student) => ({ type: 'LOGIN', user: user, instructor: instructor, student: student });

export const logout = () => ({ type: 'LOGOUT'});

export const update = (user) => ({ type: 'USER_UPDATE', user: user });