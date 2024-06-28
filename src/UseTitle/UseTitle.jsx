import { useEffect } from "react"

const UseTitle = (title) =>{
    useEffect(()=>{
      document.title = `${title} - CarDoctor`
    },[title])
};

export default UseTitle;