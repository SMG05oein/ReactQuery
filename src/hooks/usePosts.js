import axios, {post} from "axios";
import {useQueries, useQuery} from "@tanstack/react-query";

const fetchPost=(postid)=>{
    // const id = queryData.queryKey;
    let check = postid?postid:''
    console.log("qqewqq: ",check);
    return axios.get(`https://my-json-server.typicode.com/SMG05oein/ReactQuery/posts/${check}`);/*${id[1]}*/
}

export const usePostQuery=(postid)=> {
    return useQuery({
            queryKey: ['items', postid],
            // queryKey:['items',1],
            queryFn: () => fetchPost(postid),

            retry: 1, //실패 시 몇 번 재호출?
            select: (data) => {
                return data.data
            }, //전체 중에서 어떤 거
        }
    )


}

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