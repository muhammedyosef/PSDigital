import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { CateID } from '../../store/actions/category';
import Styles from '../../styles/ProductList.module.css'
const Products = ({products,res}) => {
    const dispatch=useDispatch();
    const router=useRouter();
    const parm=router.query.id;
const handleCategoryID=(e)=>{
    dispatch(CateID(e))
}
    return ( <>
      <div className="container-fluid">
      <div className='row'>
          <div className={' col-3'}>
            
          <ul className={Styles.side+" nav flex-column"}>
              {res.map((cat)=>{
                  return(
                    <>
                    <Link href={`/products/${cat.ID}`} key={cat.ID}>
  <li className={(parm==cat.ID? Styles.slidee:Styles.slide)+" nav-item"}>
    <a className={  " nav-link active"} aria-current="page">{cat.Name}</a>
  </li>
                    </Link>
                    </>
                  )
              })}
  
</ul>

          </div>
          <div className='col-8'>
          {parm=="19"?<h1 className={Styles.textt+' text-center mb-2'} >SANDWITCH</h1>:<h1  style={{color:"#F8B055"}} className='text-center mb-2'>WRAPS</h1>}

          <div className="row row-cols-1 row-cols-md-4 g-4">
{products.map((prod)=>{
  return(
    < >
    

    <Link href={`product/${prod.ID}`} key={prod.ID} >
    <div className="col" onClick={()=>handleCategoryID(prod)}>
    <div className={Styles.ayhagaa +" card h-100 border-0"}>
      <img src={prod.ImagePath} className="card-img-top" alt="..."/>
      <div className="card-body">
      <div className={`${Styles.ayhaga} d-grid gap-2`}>
  <button className={` btn btn-lg btn-primary`} type="button">{prod.Name}</button>
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
          </div>    
   
    </div> 
    </> );
}
 
export default Products;
export async function getStaticPaths(){
    const req=await fetch("https://task-api-eosin.vercel.app/api/categories");
  const res = await req.json();
    const paths=res.map(prod=>{
        return{
            params:{id:prod.ID.toString()}
        };
    });
    return{
        paths,fallback:false
    }
}
export async function getStaticProps(context){
    const id= context.params.id;
    console.log(id);
    const req=await fetch(`https://task-api-eosin.vercel.app/api/products?catID=${id}`);
    const req1=await fetch("https://task-api-eosin.vercel.app/api/categories");
    const res = await req1.json();
    const products=await req.json();
    return{
        props:{products,res}
    }
}

