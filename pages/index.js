import Link from 'next/link';
import Styles from '../styles/Home.module.css'
const index = ({res}) => {
  
  return (
    <div className={Styles.container+" container-fluid mt-5"} >
      <div className="row row-cols-1 row-cols-md-4 g-4">
      <div className="col" style={{visibility:"hidden"}}>
    <div className={Styles.ayhagaa +" card h-100 border-0"}>
      <img src="" className="card-img-top" alt="..."/>
      <div className="card-body">
      <div className={`${Styles.ayhaga} d-grid gap-2`}>
  <button className={ "btn btn-lg btn-primary"} type="button"></button>
</div>
      </div>
    </div>
  </div>
{res.map((cat)=>{
  return(
    < >
    <Link href={`products/${cat.ID}`} >
    <div className="col" >
    <div className={Styles.ayhagaa +" card h-100 border-0"}>
      <img src={cat.ImagePath} className="card-img-top" alt="..."/>
      <div className="card-body">
      <div className={`${Styles.ayhaga} d-grid gap-2`}>
  <button className={ "btn btn-lg "} type="button">{cat.Name}</button>
</div>
      </div>
    </div>
  </div>
    </Link>
  
   
  
  
    </>

)
})}
</div>
    </div> 
     );
}
 
export default index;
export async function getStaticProps(){
  const req=await fetch("https://task-api-eosin.vercel.app/api/categories");
  const res = await req.json();
  return{
    props:{res}
  }
}