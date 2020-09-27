import React, { createContext, useReducer, useContext } from "react"

const defaultState = {
  currentTheme:"dark",
  cursorType: false,
    cursorStyles:"pointer"
}


//Define Context
const GlobalStateContext = createContext(defaultState)
const GlobalDispatchContext = createContext(defaultState)



//Reducer
const globalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        currentTheme: action.theme,
      }
    }
    case "CURSOR_TYPE": {
      return {
        ...state,
        cursorType: action.cursorType,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

//Provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    currentTheme:
      window.localStorage.getItem("theme") == null
        ? "dark"
        : "light",
    cursorType: false,
    cursorStyles: ["pointer", "hovered", "locked", "white","image-hovered-0","image-hovered-1","image-hovered-2","image-hovered-3","image-hovered-4","image-hovered-5"],
  })

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

//custom hooks for when we want to use our global state
export const useGlobalStateContext = () => useContext(GlobalStateContext)

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)
