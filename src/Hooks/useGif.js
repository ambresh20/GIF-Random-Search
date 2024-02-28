// import React from 'react'
import { useState , useEffect} from 'react';
import axios from 'axios';

const API_KEY = '3QznZhvYkR8VrEAweBWLDjw4AK1q6y5R' ;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}` ;


const useGif = (inputValue) => {

	const [gif, setGig] = useState('') ;
	const [loading, setLoading] = useState('false') ;

	async function fetchData(){
		setLoading(true) ;
		const response = await axios.get(inputValue ? `${url}&tag=${inputValue}` : url) ;
		const imageSource = response.data.data.images.fixed_height.url ;
		setGig(imageSource) ;
		// console.log(response) ; 
		setLoading(false) ;
	}

	useEffect( () => {
        fetchData('car') ;
	}, [] ) ;


	return {gif, loading, fetchData} ;
}

export default useGif ;
