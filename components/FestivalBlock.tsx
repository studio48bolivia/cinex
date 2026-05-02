'use client'
import {useMemo,useState,useEffect} from 'react'
import WaitlistForm from './WaitlistForm'
const CITIES=['La Paz','Santa Cruz','Sucre','Buenos Aires','Montevideo','Santiago','Lima','Quito','Bogotá','Ciudad de México','Oaxaca','San Juan','Madrid','Lisboa']
const MQ=['INFINITE REEL','PRIMAVERA 2027','FESTIVAL DE REMIX','CINEXPRESS','IBEROAMÉRICA']
const MQA=[...MQ,...MQ,...MQ,...MQ]
function Countdown(){
  const target=useMemo(()=>new Date('2027-03-21T19:00:00').getTime(),[])
  const [t,setT]=useState(target-Date.now())
  useEffect(()=>{const id=setInterval(()=>setT(target-Date.now()),1000);return()=>clearInterval(id)},[target])
  const pad=(n:number)=>String(Math.max(0,Math.floor(n))).padStart(2,'0')
  const units=[{v:pad(t/(1000*60*60*24)),l:'días'},{v:pad((t/(1000*60*60))%24),l:'hrs'},{v:pad((t/(1000*60))%60),l:'min'},{v:pad((t/1000)%60),l:'seg'}]
  return(
    <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:8,maxWidth:360,marginTop:32}}>
      {units.map((u,i)=>(
        <div key={i} style={{background:'#1A1A1A',color:'#D85A30',padding:'12px 8px',textAlign:'center'}}>
          <div className="display countdown-digit" style={{fontSize:'clamp(28px,3vw,42px)',lineHeight:1,color:'#D85A30'}}>{u.v}</div>
          <div className="label" style={{color:'rgba(216,90,48,0.7)',marginTop:6}}>{u.l}</div>
        </div>
      ))}
    </div>
  )
}
export default function FestivalBlock(){
  return(
    <section id="reel" style={{position:'relative',background:'#D85A30',color:'#1A1A1A',overflow:'hidden'}}>
      <div className="grain" style={{mixBlendMode:'multiply',opacity:0.15} as React.CSSProperties}/>
      <div style={{borderBottom:'1px solid rgba(26,26,26,0.3)',padding:'12px 0',overflow:'hidden'}}>
        <div className="marquee-track" style={{display:'flex',whiteSpace:'nowrap'}}>
          {MQA.map((m,i)=><span key={i} className="display" style={{fontSize:'clamp(24px,3vw,40px)',padding:'0 32px',display:'inline-flex',alignItems:'center',gap:32}}>{m}<span style={{display:'inline-block',width:8,height:8,background:'#1A1A1A',transform:'rotate(45deg)'}}/></span>)}
        </div>
      </div>
      <div style={{position:'relative',maxWidth:1440,margin:'0 auto',padding:'80px 40px'}}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div style={{display:'inline-flex',alignItems:'center',gap:12,padding:'6px 12px',background:'#1A1A1A',color:'#D85A30'}}>
              <span className="reel-flicker" style={{width:8,height:8,background:'#D85A30',display:'inline-block'}}/>
              <span className="label">Próximamente · Primavera 2027</span>
            </div>
            <h2 className="display" style={{fontSize:'clamp(56px,10vw,148px)',marginTop:24,lineHeight:0.86}}>Infinite<br/><span style={{fontStyle:'italic',fontWeight:200}}>Reel</span></h2>
            <div style={{marginTop:24,display:'flex',flexWrap:'wrap',gap:'0 12px'}} className="label">
              {['Festival de Remix','·','3 noches','·','14 ciudades','·','una sola bobina'].map((t,i)=><span key={i} style={{color:'rgba(26,26,26,0.75)'}}>{t}</span>)}
            </div>
          </div>
          <div className="lg:col-span-5">
            <p style={{fontSize:'clamp(16px,1.4vw,19px)',lineHeight:1.65,color:'rgba(26,26,26,0.85)',maxWidth:'42ch',margin:0}}>Tres noches simultáneas en catorce ciudades iberoamericanas. Una sola bobina viva, montada en tiempo real con material liberado del archivo CineXpress. Funciones gratuitas, sin estreno y sin final.</p>
            <Countdown/>
            <div style={{marginTop:32}}>
              <label className="label" style={{color:'rgba(26,26,26,0.65)',display:'block',marginBottom:8}}>Avisame de las funciones</label>
              <WaitlistForm source="festival"/>
              <div className="label" style={{marginTop:12,color:'rgba(26,26,26,0.6)'}}>sin spam · podés salir cuando quieras</div>
            </div>
          </div>
        </div>
        <div style={{marginTop:64,borderTop:'1px solid rgba(26,26,26,0.3)',paddingTop:24}}>
          <div className="label" style={{color:'rgba(26,26,26,0.55)',marginBottom:16}}>Ciudades confirmadas · 14 / 14</div>
          <div style={{display:'flex',flexWrap:'wrap',gap:'0 24px',rowGap:8}}>
            {CITIES.map((c,i,a)=><span key={c} className="display" style={{fontSize:'clamp(18px,2vw,24px)',display:'inline-flex',alignItems:'center',gap:24}}>{c}{i<a.length-1&&<span style={{color:'rgba(26,26,26,0.4)'}}>/ </span>}</span>)}
          </div>
        </div>
      </div>
      <div style={{borderTop:'1px solid rgba(26,26,26,0.3)',padding:'12px 0',overflow:'hidden'}}>
        <div className="marquee-track" style={{display:'flex',whiteSpace:'nowrap',animationDirection:'reverse'}}>
          {MQA.map((m,i)=><span key={i} className="display" style={{fontSize:'clamp(24px,3vw,40px)',padding:'0 32px',display:'inline-flex',alignItems:'center',gap:32}}>{m}<span style={{display:'inline-block',width:8,height:8,background:'#1A1A1A',transform:'rotate(45deg)'}}/></span>)}
        </div>
      </div>
    </section>
  )
}
