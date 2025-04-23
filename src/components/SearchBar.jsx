import { Box, IconButton, InputBase, List, ListItem, ListItemButton, ListItemText, Paper } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { Mic, Search } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchResults, setSearchTerm, setSuggestions } from '../store/slice/searchSlice'
import youtubeService from '../services/youtubeService'
import { debounce } from 'lodash'
import { useRef } from 'react'

function SearchBar() {
   const { searchTerm,suggestions}=useSelector(state=>state.searchRe)
   const dispatch=useDispatch()
   const [showSuggestions, setShowSuggestions] = useState(false);
const inputRef=useRef(null)

const handleChange=(e)=>{
    const value=e.target.value
    dispatch(setSearchTerm(value))
    if(value){
        debounceSearch(value)
    }
   
  }
  const fetchSuggestions=async(value)=>{
    if(!value){
        dispatch(setSuggestions([]))
        return
    }
    const response=await youtubeService.getSearchSuggestion(value)
    if(response?.data?.length>0){
        dispatch(setSuggestions(response?.data[1]))
        setShowSuggestions(true)
  }
}
const debounceSearch=useCallback(debounce(fetchSuggestions,500),[])


const handleSuggestionClick=async(item)=>{
    dispatch(setSearchTerm(item))
    setShowSuggestions(false)
     
    const response=await youtubeService.getSearchResults(item)
    if(response?.data?.items.length>0){
        dispatch(setSearchResults(response?.data?.items))
        
    }

}

const handleSearchSubmit=async()=>{
    const results = await youtubeService.getSearchResults(searchTerm);
    dispatch(setSearchResults(results));
    dispatch(setSearchTerm(""));
}
  return (
    <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      // flexWrap: "wrap",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "25px",
        paddingLeft: "10px",
        width: { xs: "100%", sm: "90%" },
        position:"relative"
      }}
      ref={inputRef}
    >
      <InputBase
        size="small"
        placeholder="Search"
        sx={{ flex: 1, padding: "6px", fontSize: "16px" }}
        value={searchTerm}
        onChange={handleChange}
        onFocus={() => searchTerm && suggestions.length > 0 && setShowSuggestions(true)}
      />
      <IconButton onClick={handleSearchSubmit}
        sx={{
          borderRadius: "0 25px 25px 0",
          background: "#f8f8f8",
          padding: "10px",
        }}
      >
        <Search sx={{ color: "black" }} />
      </IconButton>
    </Box>

    <Box sx={{ ml: 2 }}>
      <IconButton
        sx={{ background: "#f1f1f1", borderRadius: "50%" }}
      >
        <Mic />
      </IconButton>
    </Box>
   {showSuggestions && suggestions.length>0 &&(
    <Paper
    elevation={2}
    sx={{
      position: "absolute",
      top: "100%",
            // width: "300px",
            width: inputRef.current.offsetWidth ||"800px",
            zIndex: 15,
            mt: 1,
            ml:0,
            maxHeight: "300px",
            overflowY: "auto",
    }}
    >
        <List>
            {suggestions.map((item,index)=>(
                <ListItemButton key={index} onClick={()=>handleSuggestionClick(item)}>
                    <ListItemText primary={item}/>
                </ListItemButton>
            ))}
        </List>

    </Paper>
   )}
  </Box>
  )
}

export default SearchBar