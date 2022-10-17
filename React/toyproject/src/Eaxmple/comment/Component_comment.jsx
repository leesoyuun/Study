import React from "react";
import Comment from './Comment';

const comments = [
    {
        name : "이소윤",
        comment : "안녕하세요. 이소윤입니다.",
    },
    {
        name: "소윤",
        comment : "현재 리액트를 공부하고 있습니다.",
    },
    {
        name : "윤",
        comment : "현재 컴포넌트를 제작중에 있습니다."
    }
];
function Component_comment(props){
    return(
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                )
            })}
        </div>
    );
}
export default Component_comment