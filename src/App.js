import React, { useEffect,useState } from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'
import{db}  from '../src/firebase'
import { collection, getDocs } from 'firebase/firestore'
import {AiOutlinePlus} from "react-icons/ai"


function App() {
  const Styles = {
    bg :` h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
    head:`flex justify-end gap-20 mb-4  mt-2`,
    wrapper: `flex flex-col justify-center items-ceter bg-white m-auto max-w-[500px] shadows-xl rounded-md`,
    text : ` font-bold text-black  text-center text-2xl px-8 underline flex justify-between`,
    form : `flex justify-between `,
    input:`p-2 w-full border bg-wheat`,
    btn:`flex justify-end bg-yellow-500 p-2 text-white rounded text-center items-center m-auto  font-bold`,
    count:`text-center m-auto font-bold text-xl`,
    todo: `items-center text center text-center m-auto bg-cyan-300`,
    button:`bg-purple-400 p-4 text-white `,
    ul:`flex `,
    li:`bg-slate-200 flex justify-between w-full m-auto my-4 p-2 `,
    Wrapper2:`flex  gap-5 text-2xl px-4`,
    text1:`text-bold text-black flex m-auto`,
    btn2:`flex justify-end bg-yellow-500 p-2 text-white`
 
  }

  //Establish connection to fibase
const connection=collection(db,'Goals');

  //rendering hook 

const [todos,setTodos]=useState([])

//Modal Button
const[modal,setModal]=useState(false)

//reading data from database
useEffect(()=>{
const getData=async()=>{
  try{
      await getDocs(connection).then((goals)=>{
        let collectGoals=goals.docs.map((doc)=>
        ({...doc.data(),id:doc.id}))
        setTodos(collectGoals)
      })
  }
  catch (error){
    console.log(error)
  }

  }
 

getData()

},[])
 
console.log('goals ',todos  )
  
 
  return (
    
    <div className={Styles.bg}>
      <div className={Styles.wrapper}>
        <div>
        </div>
    
        <div className={Styles.head}>
          <h2 className={Styles.text}>My Goals</h2>
          <button className={Styles.btn}>Add Goal</button>

        </div>
        <div>
          <form className={Styles.form} >
          
            <input className={Styles.input} type="text" name="Todo" placeholder='Add Goal' id="" /> 
            <button className={Styles.button}> 
               <AiOutlinePlus size={30}/>
            </button>
          </form>
          <ul >
            <div>
              <li className={Styles.li} >
                  <div className={Styles.Wrapper2} >
                      <input className={Styles.input} type="checkbox"  />
                      <p className={Styles.text1}></p>
                  </div>
                  <button className={Styles.btn2}><FaRegTrashAlt size={30}/></button>

              </li>

            </div>
          </ul>
         
          <p className={Styles.count}>{`You have ${todos.count} goals`}</p>
        </div>
      </div>
      
    </div>
  );
}

export default App;
