import {ArrowUpRight,ArrowDownRight,Activity,ShieldCheck,Clock3} from 'lucide-react';
export function PageHead({eyebrow,title,sub}){return <div className="pageHead"><div><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{sub}</p></div><div className="live"><span/> LIVE MODEL</div></div>}
export function Card({children,className=''}){return <section className={`card ${className}`}>{children}</section>}
export function Kpi({icon:Icon,label,value,delta,positive=true,sub}){return <Card className="kpi"><div className="kpiTop"><div className="kpiIcon"><Icon size={18}/></div><span className={positive?'up':'down'}>{positive?<ArrowUpRight size={14}/>:<ArrowDownRight size={14}/>} {delta}</span></div><div className="kpiValue">{value}</div><div className="kpiLabel">{label}</div>{sub&&<small>{sub}</small>}</Card>}
export function Badge({children,type='amber'}){return <span className={`badge ${type}`}>{children}</span>}
export function SectionTitle({title,action}){return <div className="sectionTitle"><h2>{title}</h2>{action&&<span>{action}</span>}</div>}
export function Progress({value}){return <div className="progress"><span style={{width:`${value}%`}}/></div>}
