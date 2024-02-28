// import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../Hooks/useGif';

const Random = () => {

	const {gif, loading, fetchData} = useGif() ;

	function clickHandler(){
        fetchData() ;
	}

  return (

	<div className='bg-[#4ade80] h-[50vh] w-[50vw] flex flex-col justify-center items-center rounded-xl border-2 border-black '>

		<h1 className='font-bold text-2xl underline '>A RANDOM GIF</h1>

		{
			loading ? (<Spinner />) : (<img src={gif} 
				alt='random Gif' className='w-[50vh] h-[30vh] my-3 rounded-sm ' />) 
		}


		<button onClick={clickHandler}
		className='bg-[#c9f5d9] w-3/4 p-3 m-1 font-semibold rounded-md hover:bg-cyan-300 '>GENERATE</button>
	  
	</div>
  )
}

export default Random ;



// const [gif, setGig] = useState('') ;
// 	const [loading, setLoading] = useState(false) ;


// 	async function fetchData(){
// 		setLoading(true) ;
// 		const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}` ;
// 		const response = await axios.get(url) ;
// 		const imageSource = response.data.data.images.downsized.url ;
// 		setGig(imageSource) ;
// 		// console.log(response) ;
// 		setLoading(false) ;
// 	}

// 	useEffect( () => {
//         fetchData() ;
// 	}, [] ) ;