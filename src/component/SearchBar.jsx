import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
const SearchBar = () => {
    const [gifData, setGifData] = useState([])
    const [searchGif, setSearchGif] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    useEffect(() => {
        fetch('https://api.giphy.com/v1/gifs/trending?api_key=2k1rOM8OYAxz4rWN1v3GlDqHtfcULEP2&limit=25&rating=g')
            .then((response) => response.json())
            .then((data) => setGifData(data.data))
    }, [])
    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=2k1rOM8OYAxz4rWN1v3GlDqHtfcULEP2&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`)
            .then((response) => response.json())
            .then((data) => setSearchGif(data.data))
    }, [searchTerm])

    // console.log('gifDATA...', gifData);
    console.log('searchDATA...', searchGif);

    // console.log('2k1rOM8OYAxz4rWN1v3GlDqHtfcULEP2');
    const filteredGif = () => {
     
        {
            searchGif.filter((value) => {
                if (value.username.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return <iframe src={value.embed_url} width="200" height="267" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                }
            })
        }
       return

    }
    const trendingGif = ()=>{
        
            {
                gifData.map((v, i) => {
                    return (
                        <div key={i}>
                            <iframe src={v.embed_url} width="200" height="267" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                        </div>
                    )
                })
            }
            return
        
    }

    return (
        <div>
            <div>
                <input type="search" placeholder='search...' onChange={(e) => setSearchTerm(e.target.value)} />
                <Link to='/info'>
                    <button>User Information</button>
                </Link>
            </div>
            <div>

                
           </div>
        </div>
    )
}

export default SearchBar
