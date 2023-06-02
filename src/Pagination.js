import {React, useState} from 'react'
import SearchFilter from './SearchFilter';
import './App.css';


const Pagination = () => {

  const ApiData = [
    {
      id: 1,
      name: "Sumit Singh",
      age: "23",
    },
    {
      id: 2,
      name: "Brijesh Singh",
      age: "25",
    },
    {
      id: 3,
      name: "Sahil bhutani",
      age: "19",
    },
    {
      id: 4,
      name: "Bhanu Rathore",
      age: "24",
    },
    {
      id: 5,
      name: "Manish Sharma",
      age: "21",
    },
    {
      id: 6,
      name: "Ammy ",
      age: "25",
    },
    {
      id: 7,
      name: "Kartik",
      age: "25",
    },
    {
      id: 8,
      name: "Tavneet",
      age: "25",
    },
    {
      id: 9,
      name: "Pooja",
      age: "23",
    },
    {
      id: 10,
      name: "Aarti",
      age: "24",
    },
    {
      id: 11,
      name: "Anisha",
      age: "25",
    },
    {
      id: 12,
      name: "Mamta",
      age: "24",
    },
    {
      id: 13,
      name: "Sarita",
      age: "27",
    },
    {
      id: 14,
      name: "Yogesh",
      age: "23",
    },
    {
      id: 15,
      name: "Suraj",
      age: "25",
    },
    {
      id: 16,
      name: "Kapil Gupta",
      age: "28",
    }
  ];

  const [curPage, setCurPage] = useState(1);
  const showItem = 4;

const lastIndx = curPage * showItem //2*4 = 8
const firstIndx = lastIndx - showItem //8 -4 = 4

const displayeItem = ApiData.slice(firstIndx, lastIndx) //4 se 8 tk ki value

const endPage = Math.ceil(ApiData.length / showItem)
// console.log(endPage)

const numbBtn = [...Array(endPage+1).keys()].slice(1)
// console.log(numbBtn)

const nextPage = () =>{
  if(curPage !== endPage){
    setCurPage(curPage+1)
  }
}

const prevPage = () =>{
  if(curPage !== 1){
    setCurPage(curPage-1)
  }
}

const changePage = (i) =>{
  setCurPage(i)
}


  return (
    <div>
      <section>
      <div className='container'>
          <div className='pageBx'>
            {displayeItem.map((val, id)=>{
              return(
                <ul key={id}>
                  <li><b>Id</b>: {val.id}</li>
                  <li><b>Name</b>: {val.name}</li>
                  <li><b>Age</b>: {val.age}</li>
                </ul>
              )
            })}

            <div className='navigaton'>
              <button onClick={prevPage}>Prev</button>
              {numbBtn.map((val, id)=>{
                return <button key={id} onClick={()=>changePage(val)} className={`${curPage===val ? 'active': '' }`}>{val}</button>
              })}

              <button onClick={nextPage}>Next</button>
            </div>

          </div>
        </div>
      </section>
      <SearchFilter />
    </div>
  )
}

export default Pagination
