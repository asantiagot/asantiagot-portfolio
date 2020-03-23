import React, { useState } from 'react';

const defaultState = {
    dark: true
}

const ThemeContext = React.createContext(defaultState);

const ThemeProvider = (props) => {
    const initialState = {
        dark: true
    }

    const [state, setState] = useState(initialState);

    const toggleDark = () => {
        setState({ dark: !state.dark});
    };

    const { children } = props;
    const { dark } = state;

    return (
        <ThemeContext.Provider
            value = {{
                dark,
                toggleDark: toggleDark
            }}
        >
            { children }
        </ThemeContext.Provider>
    )
}

export default ThemeContext;

export { ThemeProvider };