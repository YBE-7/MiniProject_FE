import accommodationAPI from 'apis/accommodationAPI';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { PlaceDetailInfo } from 'types/Place';

export default function useGetAccommodationDetailInfo(accommodationdId : string | undefined) {

    const [isLoading, setIsLoading] = useState(true);
    const [accommodationInfo, setAccommodationInfo] = useState<PlaceDetailInfo>();

    const navigate = useNavigate();


    useEffect(() => {
        const getAccommodationDetail = async () => {
            if (accommodationdId !== undefined) {
                setIsLoading(true);
                try {
                    const id = +accommodationdId;
                    const response = await accommodationAPI.getPlaceDetail(id);
                    setAccommodationInfo(response.data.data);
                } catch (error) {
                    console.error('Failed to load accommodation details:', error);
                    navigate('/404', { replace: true });
    
                    }
                    
                setIsLoading(false);
            }
        };
        
        getAccommodationDetail();
    },[accommodationdId]);

  return [isLoading, accommodationInfo];
}
