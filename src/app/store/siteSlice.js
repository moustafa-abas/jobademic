"use client"
import{ createSlice} from'@reduxjs/toolkit'
const initialState={
    leftSide:'true',
    addPages:'false',
    exist:'',
    rename:null,
Pages:[{
    name:'Home',
sections:{

}
}]
}
const siteReducer=createSlice({
name:'site',
initialState,
reducers:{
    showLeftSide:(state,action)=>{
        state.leftSide = action.payload
    },
    setAddPages:(state,action)=>{
        state.addPages = action.payload
    },
    setExist:(state,action)=>{
        state.exist = action.payload
    },
    setRename:(state,action)=>{
        state.rename = action.payload
    },
    addPage:(state,action)=>{
        state.Pages=[...state.Pages,{name:action.payload,id:Date.now()}]

    },
    deletePage:(state,action)=>{
        state.Pages=state.Pages.filter((page)=>page.name!=action.payload)
    },
    renamePage:(state,action)=>{
        state.Pages = state.Pages.map((page) =>
            page.name === action.payload.oldName ? { ...page, name:action.payload.newName } : page
          );        
    }
}
})
export default siteReducer.reducer
export const{addPage,deletePage,renamePage,showLeftSide,setAddPages,setExist,setRename}=siteReducer.actions