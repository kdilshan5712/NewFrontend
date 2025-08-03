import React from 'react';
import { useParams } from 'react-router-dom';
import MovieGrid from '../components/MovieGrid';

export default function MovieDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          NOW SHOWING
        </h1>
        <MovieGrid />
      </div>
    </div>
  );
}


