import { createSlice } from "@reduxjs/toolkit";

const StateSlice = createSlice({
    name : "stateData",
    initialState : {
        open_sidebar: false,
        open_login : false,
        open_profile: false,
        open_forget: false,
        open_rules: false,
        open_search: false,
        openBonus_rules: false,
        betPopupStatus: {
            colorType: "",
            value: "",
            status: false
        },
        subMenuSidebarpopup: {
            type: "",
            status: false
        },
        subMenuChildSidebarpopup: {
            type: "",
            status: false
        }
    },
    reducers : {
        sidebar: (state, action)=>{
            state.open_sidebar = action.payload
        },
        login_popup: (state, action)=> {
            state.open_login = action.payload
        },
        profile_popup: (state, action)=> {
            state.open_profile = action.payload
        },
        forget_popup: (state, action)=> {
            state.open_forget = action.payload
        },
        rules_popup: (state, action)=> {
            state.open_rules = action.payload
        },
        search_popup: (state, action)=> {
            state.open_search = action.payload
        },
        bonus_popup: (state, action)=> {
            state.openBonus_rules = action.payload
        },
        bet_popup: (state, action)=> {
            state.betPopupStatus.colorType = action.payload.type;
            state.betPopupStatus.value = action.payload.value;
            state.betPopupStatus.status = action.payload.status;
        },
        sideBar_popup: (state, action)=>{
            state.subMenuSidebarpopup.type = action.payload.type;
            state.subMenuSidebarpopup.status = action.payload.status;
        },
        childSideBar_popup: (state, action)=>{
            state.subMenuChildSidebarpopup.type = action.payload.type;
            state.subMenuChildSidebarpopup.status = action.payload.status;
        }
    }
})

export default StateSlice;
export const {sidebar, login_popup, profile_popup, forget_popup, bet_popup,
    rules_popup, search_popup, bonus_popup, sideBar_popup, childSideBar_popup} = StateSlice.actions;