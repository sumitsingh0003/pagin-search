import './App.css';
import {React, useState} from 'react'
import ReactPaginate from 'react-paginate';

function App() {
 
const [curntPage, setCurntPage] = useState(0);

const itemPage = 4;
const totalItems = 16;

const handlePageClick = (data) =>{
  setCurntPage(data.selected)
}

// const pageCounts = Math.ceil(totalItems/itemPage);

// console.log(pageCount, "1")
  
const offset = curntPage * itemPage;
console.log(offset, "2")

const items = Array.from({length:totalItems}).slice(offset, offset+itemPage)
console.log(items, "3")

  return (
    <>
    <section>
      <div className='container'>
        <div className='pageBx'>
          {items.map((val, i)=>{
            return (
              <ul key={i}>
              <li>{i + offset + 1}</li>
            </ul>
            )
          })}
          <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={itemPage}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
            />
        </div>
      </div>
    </section>
          
    </>
  );
}

export default App;
