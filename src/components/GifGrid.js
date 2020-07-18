import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="mt-3 mb-2">{category}</h3>
      <hr />

      {loading && <p className="animate__animated animate__fadeInLeft">Cargando...</p>}

      <div className="card-columns">
        {
          images.map((img) => (
            <GifGridItem
              key={img.id}
              {...img}
            />
          ))
        }
      </div>
    </>
  )
}