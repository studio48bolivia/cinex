import Link from 'next/link'
const CornerTicks=({color='rgba(244,241,235,0.5)'}:{color?:string})=>(<>
  <span style={{position:'absolute',top:0,left:0,width:12,height:12,borderTop:`1px solid ${color}`,borderLeft:`1px solid ${color}`}}/>
  <span style={{position:'absolute',top:0,right:0,width:12,height:12,borderTop:`1px solid ${color}`,borderRight:`1px solid ${color}`}}/>
  <span style={{position:'absolute',bottom:0,left:0,width:12,height:12,borderBottom:`1px solid ${color}`,borderLeft:`1px solid ${color}`}}/>
  <span style={{position:'absolute',bottom:0,right:0,width:12,height:12,borderBottom:`1px solid ${color}`,borderRight:`1px solid ${color}`}}/>
</>)
const cards=[
  {id:'archivo',tag:'Archivo',tagColor:'#6B5CE7',href:'/archivo',title:'El acervo abierto.',lines:['Películas inacabadas, ensayos y descartes liberados.','Buscá por país, año, formato o estado de finalización.'],meta:['1.247 piezas','14 países','CC · Dominio público'],placeholder:'reel · 16mm · b&n'},
  {id:'laboratorio',tag:'Laboratorio',tagColor:'#0F6E56',href:'/laboratorio',title:'Donde el material muta.',lines:['Proyectos de remontaje en curso, abiertos a colaboradores.','Sumate como montajista, sonidista, guionista o crítica.'],meta:['9 proyectos activos','142 colaboradores','sesiones quincenales'],placeholder:'mesa de edición · sesión #07'},
  {id:'comunidad',tag:'Comunidad',tagColor:'#BA7517',href:'/comunidad',title:'Una red iberoamericana.',lines:['Cineastas, archivistas y cinéfilos compartiendo decisiones.','Asambleas mensuales abiertas y mentorías horizontales.'],meta:['3.480 miembros','asambleas en vivo','voz · voto · obra'],placeholder:'asamblea · marzo 2026'},
  {id:'manifiesto',tag:'Manifiesto',tagColor:'#F4F1EB',href:'/manifiesto',title:'Lo abandonado no se tira.',lines:['Siete principios sobre cultura abierta y autoría compartida.','Documento vivo, redactado en asamblea desde 2018.'],meta:['7 principios','v · 2026.04','leelo · firmalo'],placeholder:'documento · texto plano'},
]
export default function SectionCards() {
  return (
    <section style={{background:'#1A1A1A',color:'#F4F1EB'}}>
      <div style={{maxWidth:1440,margin:'0 auto',padding:'100px 40px'}}>
        <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',marginBottom:48,flexWrap:'wrap',gap:24}}>
          <div>
            <div className="label" style={{color:'rgba(244,241,235,0.55)',marginBottom:16,display:'flex',alignItems:'center',gap:12}}><span style={{width:24,height:1,background:'rgba(244,241,235,0.3)',display:'block'}}/>Cuatro entradas</div>
            <h2 className="display" style={{fontSize:'clamp(32px,4.5vw,60px)',margin:0}}>Por dónde entrar<br/><span style={{color:'rgba(244,241,235,0.4)'}}>al ecosistema.</span></h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{borderTop:'1px solid rgba(244,241,235,0.12)',borderLeft:'1px solid rgba(244,241,235,0.12)'}}>
          {cards.map((c,i)=>(
            <article key={c.id} style={{borderRight:'1px solid rgba(244,241,235,0.12)',borderBottom:'1px solid rgba(244,241,235,0.12)',padding:40,transition:'background 0.2s'}}
              onMouseEnter={e=>e.currentTarget.style.background='rgba(244,241,235,0.025)'} onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:32}}>
                <div style={{display:'flex',alignItems:'center',gap:10}}><span style={{width:10,height:10,background:c.tagColor,display:'inline-block'}}/><span className="label" style={{color:c.tagColor}}>{c.tag}</span></div>
                <span className="label" style={{color:'rgba(244,241,235,0.4)'}}>0{i+1} / 04</span>
              </div>
              <div className="placeholder-stripes" style={{position:'relative',height:140,marginBottom:32,border:'1px solid rgba(244,241,235,0.1)',overflow:'hidden'}}>
                <CornerTicks/>
                <div className="label" style={{position:'absolute',top:8,left:8,color:'rgba(244,241,235,0.55)'}}>{c.placeholder}</div>
                <div className="label" style={{position:'absolute',bottom:8,right:8,color:'rgba(244,241,235,0.4)'}}>CX-0{i+1}</div>
                <div style={{position:'absolute',top:0,left:0,right:0,height:12,display:'flex',justifyContent:'space-around',alignItems:'center'}}>{Array.from({length:12}).map((_,j)=><span key={j} style={{width:8,height:4,background:'#1A1A1A',display:'inline-block'}}/>)}</div>
                <div style={{position:'absolute',bottom:0,left:0,right:0,height:12,display:'flex',justifyContent:'space-around',alignItems:'center'}}>{Array.from({length:12}).map((_,j)=><span key={j} style={{width:8,height:4,background:'#1A1A1A',display:'inline-block'}}/>)}</div>
              </div>
              <h3 className="display" style={{fontSize:'clamp(22px,2.8vw,40px)',lineHeight:0.95,maxWidth:'14ch',margin:0}}>{c.title}</h3>
              <div style={{marginTop:20,color:'rgba(244,241,235,0.7)',fontSize:15,lineHeight:1.65}}>{c.lines.map((ln,j)=><p key={j} style={{margin:0,marginBottom:j<c.lines.length-1?6:0}}>{ln}</p>)}</div>
              <div style={{marginTop:36,display:'flex',alignItems:'center',justifyContent:'space-between',borderTop:'1px solid rgba(244,241,235,0.1)',paddingTop:20}}>
                <Link href={c.href} style={{display:'flex',alignItems:'center',gap:8,fontSize:14,color:c.tagColor,textDecoration:'none'}} onMouseEnter={e=>e.currentTarget.style.color='#F4F1EB'} onMouseLeave={e=>e.currentTarget.style.color=c.tagColor}>Ver más →</Link>
                <span className="label" style={{color:'rgba(244,241,235,0.35)'}}>{c.tag.toLowerCase()}.cx</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
