import React, {useEffect} from 'react';
import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const ReactQuery = () => {


    const fetchPost=()=>{return axios.get('https://my-json-server.typicode.com/SMG05oein/ReactQuery/posts');}

    const {isError ,error,isLoading,data}=useQuery({
        /**API호출에 이름을 주는데 내가 posts라는 유일한 이름을 지어준 거 | GPT가 내 설명은 좀 아닌 거 같다고 했지만 난 내 설명도 맞다고 생각함
         * GPT성멸: 해당 API 요청을 식별하는 고유 키 (캐싱 및 중복 호출 방지)*/
        queryKey:['items'],
        //API호출하는 게 기능인가
        // queryFn:()=>{
        //     return axios.get('http://localhost:5000/posts');
        // }
        // 또는
        queryFn: fetchPost,
        retry:1, //실패 시 몇 번 재호출?
        select:(data)=>{return data.data}, //전체 중에서 어떤 거
        // gcTime:10000, //캐쉬에 얼마나 있을 거야? 단위 ms | 기본 5분

    });
    console.log("dddd",data,isLoading,isError,error);

    //try~catch를 하는 것도 한 번 생각을 해보자
    // if(isLoading){return <h1>Loading...</h1>}
    // else if(isError){
    //     return(
    //         <div>
    //             <h1>
    //                 에러 발생 관리자에게 문의해주세요.
    //                 <p/>에러 메시지: {error.message}
    //             </h1>
    //             <i>상남자는 에러 메시지를 보여주지</i>
    //         </div>
    //     )
    // }
    // else{
    //     return (
    //         <div>
    //             {data.data.map(i=>{
    //                 return <p>{i.title}</p>
    //             })}
    //         </div>
    //     );
    // }

    try{
        if(isLoading){return <h1>Loading...</h1>}
        return (
                <div>
                    {data.map(i=>{
                        return <p>{i.title}</p>
                    })}
                </div>
            );
    }catch{
        return(
                <div>
                    <h1>
                        에러 발생 관리자에게 문의해주세요.
                        <p/>에러 메시지: {error.message}
                    </h1>
                    <i>상남자는 에러 메시지를 보여주지</i>
                </div>
            )
    }
};

export default ReactQuery;