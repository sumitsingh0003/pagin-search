import {React, useState} from 'react'

const SearchFilter = () => {

const ApiData = [
    {
      id: 1,
      email:"sumit@gmail.com",
      name: "Sumit Singh",
      age: "23",
    },
    {
      id: 2,
      email:"brijesh@gmail.com",
      name: "Brijesh Singh",
      age: "25",
    },
    {
      id: 3,
      email:"sahil@gmail.com",
      name: "Sahil bhutani",
      age: "19",
    },
    {
      id: 4,
      email:"bhanu@gmail.com",
      name: "Bhanu Rathore",
      age: "24",
    },
    {
      id: 5,
      email:"manish@gmail.com",
      name: "Manish Sharma",
      age: "21",
    },
    {
      id: 6,
      email:"ammy@gmail.com",
      name: "Ammy ",
      age: "25",
    },
    {
      id: 7,
      email:"kartik@gmail.com",
      name: "Kartik Dangi",
      age: "25",
    },
    {
      id: 8,
      email:"tavneet@gmail.com",
      name: "Tavneet",
      age: "25",
    },
    {
      id: 9,
      email:"pooja@gmail.com",
      name: "Pooja Maurya",
      age: "23",
    },
    {
      id: 10,
      email:"aarti@gmail.com",
      name: "Aarti Chaudhary",
      age: "24",
    },
    {
      id: 11,
      email:"anisha@gmail.com",
      name: "Anisha",
      age: "25",
    },
    {
      id: 12,
      email:"mamta@gmail.com",
      name: "Mamta",
      age: "24",
    },
    {
      id: 13,
      email:"sarita@gmail.com",
      name: "Sarita",
      age: "27",
    },
    {
      id: 14,
      email:"yogesh@gmail.com",
      name: "Yogesh",
      age: "23",
    },
    {
      id: 15,
      email:"suraj@gmail.com",
      name: "Suraj",
      age: "25",
    },
    {
      id: 16,
      email:"kapil@gmail.com",
      name: "Kapil Gupta",
      age: "28",
    }
  ];

    const [searchData, setSearchData] = useState(ApiData);


    const handleInput = (e) => {
        setSearchData(ApiData.filter(filtData => filtData.name.toLowerCase().includes(e.target.value.toLowerCase())))
        console.log(searchData)
    }


  return (
    <>
      <section className='searchFilter'>
        <div className='container'>
            <div className='filterData'>
                <input placeholder='Search with Name' onChange={handleInput} type='search' />
                <div className='listingData'>
                    <ul>
                        {searchData.map((val, id)=>{
                           return(
                            <li key={id}>
                                <div className='items'>Id: {val.id}</div>
                                <div className='items'>Name: {val.name}</div>
                                <div className='items'>Email: {val.email}</div>
                                <div className='items'>Age: {val.age}</div>
                            </li> 
                           ) 
                        })}
                    </ul>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default SearchFilter
