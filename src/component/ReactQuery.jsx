import React, {useEffect} from 'react';
import axios from "axios";
import {useQueries, useQuery} from "@tanstack/react-query";
import {usePostQuery} from "../hooks/usePosts";
import {queries} from "@testing-library/dom";

const ReactQuery = () => {


    // const fetchPost=(postid)=>{
    //     // const id = queryData.queryKey;
    //     let check = postid?postid:''
    //     console.log("qqewqq: ",check);
    //     return axios.get(`https://my-json-server.typicode.com/SMG05oein/ReactQuery/posts/${check}`);/*${id[1]}*/
    // }
    // const ids = [1, 2, 3, 4];
    //
    // const result = useQueries({
    //     queries: ids.map((id) => {
    //         return {
    //             queryKey: ["posts", id],
    //             queryFn: () => fetchPost(id),
    //             retry: 1,
    //         }
    //     }),
    //     combine: (result) => {
    //         return {
    //             data: result.map(result.data.data),
    //         }
    //     }
    // })



    // useQueries{(
    //     queries:ids.map;\((id)=>{
    //     return {
    //         queryKey:["posts", id],
    //
    //     }
    // }),
    // )};

    const {isError ,error,isLoading,data, refetch} = usePostQuery()
    // console.log("dddd",data,isLoading,isError,error);

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