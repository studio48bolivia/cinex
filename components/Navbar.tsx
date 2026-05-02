'use client'
import Link from 'next/link'
import { useState } from 'react'

const NAV_LINKS = [
  {label:'Archivo',href:'/archivo',color:'#6B5CE7'},
  {label:'Laboratorio',href:'/laboratorio',color:'#0F6E56'},
  {label:'Infinite Reel',href:'/festival',color:'#D85A30'},
  {label:'Comunidad',href:'/comunidad',color:'#BA7517'},
  {label:'Manifiesto',href:'/manifiesto',color:'#F4F1EB'},
]

const Logo = () => (
  <Link href="/" style={{display:'flex',alignItems:'center',gap:8,textDecoration:'none'}}>
    <span style={{position:'relative',display:'inline-flex',alignItems:'center',justifyContent:'center',width:28,height:28}}>
      <span style={{position:'absolute',inset:0,border:'1px solid rgba(244,241,235,0.8)'}}/>
      <span style={{position:'absolute',top:-3,left:3,width:4,height:4,background:'rgba(244,241,235,0.8)'}}/>
      <span style={{position:'absolute',top:-3,right:3,width:4,height:4,background:'rgba(244,241,235,0.8)'}}/>
      <span style={{position:'absolute',bottom:-3,left:3,width:4,height:4,background:'rgba(244,241,235,0.8)'}}/>
      <span style={{position:'absolute',bottom:-3,right:3,width:4,height:4,background:'rgba(244,241,235,0.8)'}}/>
      <span className="label" style={{fontSize:10,fontWeight:700,color:'#F4F1EB'}}>CX</span>
    </span>
    <span style={{fontWeight:700,letterSpacing:'-0.02em',fontSize:17,color:'#F4F1EB'}}>CineXpress</span>
  </Link>
)

export default function Navbar() {
  const [open,setOpen]=useState(false)
  return (
    <header style={{position:'sticky',top:0,zIndex:50,background:'rgba(26,26,26,0.88)',backdropFilter:'blur(12px)',borderBottom:'1px solid rgba(244,241,235,0.1)'}}>
      <div style={{maxWidth:1440,margin:'0 auto',padding:'0 40px',height:64,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Logo/>
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map(l=>(
            <Link key={l.label} href={l.href} style={{display:'flex',alignItems:'center',gap:8,fontSize:13,letterSpacing:'0.14em',textTransform:'uppercase',color:'rgba(244,241,235,0.75)',textDecoration:'none'}}
              onMouseEnter={e=>e.currentTarget.style.color='#F4F1EB'} onMouseLeave={e=>e.currentTarget.style.color='rgba(244,241,235,0.75)'}>
              <span style={{width:6,height:6,background:l.color,display:'inline-block',opacity:0.7}}/>
              {l.label}
            </Link>
          ))}
        </nav>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <Link href="/auth" style={{padding:'0 16px',height:36,display:'inline-flex',alignItems:'center',fontSize:13,fontWeight:500,background:'#F4F1EB',color:'#1A1A1A',textDecoration:'none'}}
            onMouseEnter={e=>e.currentTarget.style.background='#fff'} onMouseLeave={e=>e.currentTarget.style.background='#F4F1EB'}>
            Unirse
          </Link>
          <button onClick={()=>setOpen(!open)} className="lg:hidden" style={{width:36,height:36,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:5,border:'1px solid rgba(244,241,235,0.2)',background:'transparent',cursor:'pointer'}}>
            <span style={{width:16,height:1,background:'#F4F1EB',display:'block'}}/><span style={{width:16,height:1,background:'#F4F1EB',display:'block'}}/><span style={{width:16,height:1,background:'#F4F1EB',display:'block'}}/>
          </button>
        </div>
      </div>
      {open&&(
        <div style={{borderTop:'1px solid rgba(244,241,235,0.1)',padding:'16px 40px',display:'flex',flexDirection:'column',gap:12,background:'#0E0E0E'}}>
          {NAV_LINKS.map(l=>(<Link key={l.label} href={l.href} onClick={()=>setOpen(false)} style={{display:'flex',alignItems:'center',gap:12,color:'rgba(244,241,235,0.85)',textDecoration:'none',fontSize:13,letterSpacing:'0.14em',textTransform:'uppercase'}}>
            <span style={{width:6,height:6,background:l.color,display:'inline-block'}}/>{l.label}
          </Link>))}
        </div>
      )}
    </header>
  )
}
