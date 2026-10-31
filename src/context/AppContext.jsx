import { createContext, useContext, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { initialData } from '../data/initialData'

const AppContext=createContext()
export function AppProvider({children}){
  const [data,setData]=useLocalStorage('academicDashboardData',initialData)
  const update=(key,value)=>setData(prev=>({...prev,[key]:typeof value==='function'?value(prev[key]):value}))
  const setList=(key,list)=>update(key,list)
  const reset=()=>{setData(structuredClone(initialData));localStorage.removeItem('academicDashboardData');setData(structuredClone(initialData))}
  useEffect(()=>{document.documentElement.className=data.preferences?.theme==='dark'?'dark':''},[data.preferences?.theme])
  return <AppContext.Provider value={{data,setData,update,setList,reset}}>{children}</AppContext.Provider>
}
export const useApp=()=>useContext(AppContext)

