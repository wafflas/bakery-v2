'use client';
import React from 'react';

interface LoadingSpinnerProps {
    isLoading: boolean;
}

const LoadingSpinner = ({ isLoading }: LoadingSpinnerProps) => {
    if (!isLoading) return null;
    
    return (
        <div className='fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50 p-4'>
            <div className='flex flex-col items-center gap-4'>
                <div className='w-12 h-12 border-4 border-red-200 border-t-red-800 rounded-full animate-spin'></div>
                <p className='text-red-800 font-semibold'>Φόρτωση...</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;