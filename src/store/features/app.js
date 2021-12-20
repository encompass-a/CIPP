import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState = {
  sidebarShow: true,
  sidebarUnfoldable: false,
  currentTenant: {},
  themes: ['default', 'cyberdrain', 'dark'],
  currentTheme: 'default',
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleSidebarShow: (state) => {
      state.sidebarShow = !state.sidebarShow
    },
    toggleSidebarUnfoldable: (state, action) => {
      state.sidebarUnfoldable = action.payload?.unfoldable
    },
    setCurrentTenant: (state, action) => {
      state.currentTenant = action.payload?.tenant
    },
    setCurrentTheme: (state, action) => {
      state.currentTheme = action.payload?.theme
    },
    setSidebarVisible: (state, action) => {
      state.sidebarShow = action.payload?.visible
    },
  },
})

export const {
  toggleSidebarShow,
  toggleSidebarUnfoldable,
  setCurrentTenant,
  setCurrentTheme,
  setSidebarVisible,
} = appSlice.actions

export default persistReducer(
  {
    key: 'rtk:app',
    storage,
  },
  appSlice.reducer,
)
