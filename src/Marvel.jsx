import React, { useEffect, useState } from 'react'
import Hero from './Hero';

const Marvel = ({search}) => {
    const [characters, setCharacters] = useState([]);
    const [show, setShow] = useState(false);
    const [heroData, setHeroData] = useState();


    useEffect(() => {
        getcharcter(search);
    }, [search]);


    const getcharcter = async (search) => {

        const api = await fetch("https://gateway.marvel.com/v1/public/characters?nameStartsWith=" + search + "&ts=1&apikey=668dda8846044f0c9853b80660d7b720&hash=f72571ddc8ae1a67795b16d6f66615f1");
        const data = await api.json();


        setCharacters(data.data.results);

    };

    return (
        <div className='main'>

            {show !== true && <div className='row'>
                {
                    characters.map((item) => (
                         <div className=" col-lg-3 col-md-6">
                            <div className="card" style={{margin: 20}}>
                                <img
                                    src={item.thumbnail.path + "." + item.thumbnail.extension}
                                    alt="" className='card-image-top'
                                />
                                <h4 className='card-header'>{item.name}</h4>
                                <div className='card-body'>
                                    <button onClick={()=>{setShow(true); setHeroData(item)}} className='btn btn-danger'>View</button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        }
        { show === true && <Hero heroData={heroData} setShow={setShow}/> }

        </div>
    )
}

export default Marvel
