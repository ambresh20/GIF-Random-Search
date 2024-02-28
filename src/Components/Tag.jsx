import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../Hooks/useGif';

const Tag = () => {

	const {gif, loading, fetchData} = useGif() ;

	const [inputValue, setInputValue] = useState('Car') ;

	function clickHandler(){
        fetchData(inputValue) ;
	}

	function changeHandler(event){
		setInputValue(event.target.value) ;
		// console.log(event.target.value) ;
	}


  return (

	<div className='bg-[#60a5fa] h-[60vh] w-[50vw] flex flex-col justify-center items-center rounded-xl mt-10 border-2 border-black '>

		<h1 className='font-bold text-2xl underline '>GENERATE {inputValue} GIF</h1>

		{
			loading ? (<Spinner />) : (<img src={gif} 
				alt='generate Gif' className='w-[50vh] h-[30vh] my-3 rounded-sm ' />) 
		}

		<input  onChange={changeHandler}
		value={inputValue}
		className='w-3/4 m-2 p-3 rounded-md shadow-sm  focus:border-green-600 focus:ring-gray-200 block  sm:text-xl focus:ring-1 text-center '
		type='text' />

		<button onClick={clickHandler}
		className='bg-[#c9f5d9] w-3/4 p-3 m-2 mb-0 font-semibold rounded-md hover:bg-green-300 '>GENERATE</button>
	  
	</div>

  )
}

export default Tag ;



// async function fetchData(){
// 	setLoading(true) ;
// 	const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${inputValue}` ;

// 	const response = await axios.get(url) ;
// 	const imageSource = response.data.data.images.fixed_height.url ;
// 	setGig(imageSource) ;
// 	console.log(response) ;
// 	setLoading(false) ;
// }

// useEffect( () => {
// 	fetchData() ;
// }, [] ) ;
