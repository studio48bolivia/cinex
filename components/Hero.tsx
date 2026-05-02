'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [time,setTime]=useState('')
  useEffect(()=>{
    const tick=()=>{const d=new Date();setTime(`${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}:${String(d.getSeconds()).padStart(2,'0')}`)}
    tick();const id=setInterval(tick,1000);return()=>clearInterval(id)
  },[])
  return (
    <section id="top" style={{position:'relative',background:'#1A1A1A',color:'#F4F1EB',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0}}>
        <div className="placeholder-stripes" style={{position:'absolute',inset:0,opacity:0.9}}/>
        <div style={{position:'absolute',inset:0}}>
          <div style={{position:'absolute',left:0,top:0,height:'100%',width:'42%',background:'linear-gradient(to right,rgba(0,0,0,0.8),transparent)'}}/>
          <div style={{position:'absolute',right:0,top:0,height:'100%',width:'40%',background:'linear-gradient(to left,rgba(0,0,0,0.7),transparent)'}}/>
          <div style={{position:'absolute',bottom:0,left:0,right:0,height:'66%',background:'linear-gradient(to top,#1A1A1A,rgba(26,26,26,0.85),transparent)'}}/>
        </div>
        <div className="grain"/><div className="scanlines"/>
      </div>
      <div style={{position:'relative',borderBottom:'1px solid rgba(244,241,235,0.1)'}}>
        <div style={{maxWidth:1440,margin:'0 auto',padding:'0 40px',height:44,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <span className="reel-flicker" style={{width:8,height:8,background:'#D85A30',display:'inline-block'}}/>
            <span className="label" style={{color:'rgba(244,241,235,0.55)'}}>REC · bobina 0001 / lote A</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span className="label" style={{color:'rgba(244,241,235,0.45)'}}>23.976 fps</span>
            <span className="label" style={{color:'rgba(244,241,235,0.45)'}}>2.39 : 1</span>
            <span className="label countdown-digit" style={{color:'rgba(244,241,235,0.45)'}}>{time}</span>
          </div>
          <div className="label" style={{color:'rgba(244,241,235,0.55)'}}>CX · 26</div>
        </div>
      </div>
      <div style={{position:'relative',maxWidth:1440,margin:'0 auto',padding:'80px 40px 100px'}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:48,flexWrap:'wrap'}}>
          <span style={{width:40,height:1,background:'rgba(244,241,235,0.5)',display:'block'}}/>
          <span className="label" style={{color:'rgba(244,241,235,0.7)'}}>Cultura abierta · Iberoamérica · Remix</span>
          <span style={{width:8,height:8,background:'#6B5CE7',display:'inline-block'}}/><span style={{width:8,height:8,background:'#0F6E56',display:'inline-block'}}/><span style={{width:8,height:8,background:'#D85A30',display:'inline-block'}}/><span style={{width:8,height:8,background:'#BA7517',display:'inline-block'}}/>
        </div>
        <h1 className="display" style={{fontSize:'clamp(44px,8vw,128px)',margin:0,lineHeight:0.92}}>
          <span style={{display:'block'}}>El cine inacabado</span>
          <span style={{display:'block'}}>se convierte en</span>
          <span style={{display:'block',fontStyle:'italic',fontWeight:200}}>nuevo cine<span className="blink" style={{display:'inline-block',marginLeft:12,width:12,height:'0.78em',background:'#F4F1EB',verticalAlign:'baseline'}}/></span>
        </h1>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <p className="md:col-span-5" style={{fontSize:18,lineHeight:1.65,color:'rgba(244,241,235,0.8)',maxWidth:'44ch',margin:0}}>CineXpress es un ecosistema donde proyectos abandonados, descartes y material de archivo se transforman en nuevas obras. Un laboratorio de remontaje colectivo para Iberoamérica.</p>
          <div className="md:col-span-4 md:col-start-7 flex flex-col gap-3">
            <Link href="/archivo" style={{padding:'0 20px',height:48,display:'inline-flex',alignItems:'center',justifyContent:'space-between',gap:16,background:'#F4F1EB',color:'#1A1A1A',fontWeight:500,fontSize:14,textDecoration:'none'}} onMouseEnter={e=>e.currentTarget.style.background='#fff'} onMouseLeave={e=>e.currentTarget.style.background='#F4F1EB'}><span>Explorar el archivo</span><span>→</span></Link>
            <Link href="/archivo#donar" style={{padding:'0 20px',height:48,display:'inline-flex',alignItems:'center',justifyContent:'space-between',gap:16,border:'1px solid rgba(244,241,235,0.4)',color:'#F4F1EB',fontSize:14,textDecoration:'none'}} onMouseEnter={e=>{e.currentTarget.style.borderColor='#F4F1EB';e.currentTarget.style.background='rgba(244,241,235,0.05)'}} onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(244,241,235,0.4)';e.currentTarget.style.background='transparent'}}><span>Donar material</span><span>+</span></Link>
          </div>
          <div className="md:col-span-3 md:col-start-10 flex md:justify-end">
            <div style={{display:'flex',gap:32}}>
              <div><div className="display" style={{fontSize:36}}>1.247</div><div className="label" style={{color:'rgba(244,241,235,0.5)',marginTop:4}}>piezas en archivo</div></div>
              <div><div className="display" style={{fontSize:36}}>14</div><div className="label" style={{color:'rgba(244,241,235,0.5)',marginTop:4}}>países activos</div></div>
            </div>
          </div>
        </div>
      </div>
      <div style={{position:'relative',borderTop:'1px solid rgba(244,241,235,0.1)'}}>
        <div style={{maxWidth:1440,margin:'0 auto',padding:'10px 40px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div className="hidden md:flex items-center gap-6">
            <span className="label" style={{color:'rgba(244,241,235,0.45)'}}>Lote · A-0001</span>
            <span className="label" style={{color:'rgba(244,241,235,0.45)'}}>Origen · Cinemateca Boliviana</span>
          </div>
          <div className="label" style={{color:'rgba(244,241,235,0.45)'}}>FRAME 00:00:01:14</div>
        </div>
      </div>
    </section>
  )
}
