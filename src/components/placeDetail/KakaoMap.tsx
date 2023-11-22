import React, { useEffect } from 'react'

declare global {
  interface Window {
    kakao: any;
  }
}

export default function KakaoMap() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_KEY}&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center : new window.kakao.maps.LatLng(33.4482177, 126.3039055),
          level : 3
        };
        const map = new window.kakao.maps.Map(container, options);

        const markerPosition = new window.kakao.maps.LatLng(33.4482177, 126.3039055);

        const marker = new window.kakao.maps.Marker({
          position : markerPosition,
        });

        marker.setMap(map);
      })
    }
    return () => {
      document.head.removeChild(script);
    } 
  },[]);

  return (
    <div id='map' className='w-full h-[364px]'></div>
  )
}
