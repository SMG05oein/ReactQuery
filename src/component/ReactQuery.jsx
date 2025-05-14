import React, {useEffect} from 'react';
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {usePostQuery} from "../hooks/usePosts";

const ReactQuery = () => {

    const {isError ,error,isLoading,data, refetch} = usePostQuery()

    // const fetchPost=(queryData)=>{
    //     const id = queryData.queryKey;
    //     // console.log("qqewqq: ",id[1]);
    //     return axios.get(`https://my-json-server.typicode.com/SMG05oein/ReactQuery/posts/`);/*${id[1]}*/
    // }
    //
    // const {isError ,error,isLoading,data, refetch}=useQuery({
    //     /**API호출에 이름을 주는데 내가 posts라는 유일한 이름을 지어준 거 | GPT가 내 설명은 좀 아닌 거 같다고 했지만 난 내 설명도 맞다고 생각함
    //      * GPT성멸: 해당 API 요청을 식별하는 고유 키 (캐싱 및 중복 호출 방지)*/
    //     queryKey:['items'],
    //     // queryKey:['items',1],
    //
    //     //API호출하는 게 기능인가
    //     // queryFn:()=>{
    //     //     return axios.get('http://localhost:5000/posts');
    //     // }
    //     // 또는
    //     queryFn: fetchPost,
    //
    //     retry:1, //실패 시 몇 번 재호출?
    //     select:(data)=>{return data.data}, //전체 중에서 어떤 거
    //     // gcTime:10000, //캐쉬에 얼마나 있을 거야? 단위 ms | 기본 5분
    //     staleTime: 2000, //fresh한 상태, 페이지 왔을 때 API호출 안 할 시간 | 기본 0초
    //     // refetchInterval:5000, //몇 초만다 다시 호출?
    //     // refetchOnMount:false, //한 번 하고 영원히 호출 안 함 | true가 기본 | 버튼으로 새로고침 있으면 좋을 듯
    // });
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
    //             {data?.map(i=>{
    //                 return <p>{i.title}</p>
    //             })}
    //             <button onClick={refetch}>새로고침</button>
    //         </div>
    //     );
    // }

    try{
        if(isLoading){return <h1>Loading...</h1>}
        return (
                <div>

                    {data?.map(i=>{
                        return <p>{i.title}</p>
                    })}
                    {/*<p>{data.title}</p>*/}
                    <button onClick={refetch}>새로고침</button>
                </div>
            );
    }catch{
        return(
                <div>
                    <h1>
                        에러 발생 관리자에게 문의해주세요.
                        <p/>에러 메시지: {error? error.message : "원인 불명"}
                    </h1>
                    <i>상남자는 에러 메시지를 보여주지</i>
                </div>
            )
    }
};

export default ReactQuery;