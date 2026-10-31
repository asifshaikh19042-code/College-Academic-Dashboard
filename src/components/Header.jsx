import { useState } from 'react'
import { Bell,Menu,ChevronDown,UserRound,LogOut } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { Link } from 'react-router-dom'
export default function Header({setMobileOpen}){
 const {data,setList}=useApp(); const [open,setOpen]=useState(false); const [bell,setBell]=useState(false)
 const unread=data.notifications.filter(n=>!n.read).length
 return <header className="topbar"><button className="mobile-menu" onClick={()=>setMobileOpen(true)}><Menu/></button><div className="header-brand"><div className="header-logo">DSC</div><div><strong>Dayanand Science College</strong><span>Latur, Maharashtra</span></div></div><div className="header-actions"><div className="notify-wrap"><button className="icon-btn" onClick={()=>setBell(!bell)}><Bell/><span className="badge">{unread}</span></button>{bell&&<div className="header-popover"><div className="popover-title"><b>Notifications</b><button onClick={()=>setList('notifications',data.notifications.map(n=>({...n,read:true})))}>Mark all read</button></div>{data.notifications.map(n=><div className={`notice-row ${n.read?'':'unread'}`} key={n.id}><b>{n.title}</b><span>{n.text}</span></div>)}</div>}</div><div className="profile-wrap"><button className="profile-button" onClick={()=>setOpen(!open)}><div className="avatar">{data.profile.avatar?<img src={data.profile.avatar}/>:data.profile.fullName.split(' ').map(x=>x[0]).join('').slice(0,2)}</div><div className="profile-text"><b>{data.profile.fullName}</b><span>{data.profile.course} · {data.profile.semester}</span></div><ChevronDown size={16}/></button>{open&&<div className="profile-menu"><Link to="/profile" onClick={()=>setOpen(false)}><UserRound size={16}/> My Profile</Link><button onClick={()=>alert('Demo session ended. This frontend has no authentication server.')}><LogOut size={16}/> Demo Logout</button></div>}</div></div></header>
}

