import { dbService } from "fbInstance";
import React, { useDebugValue, useEffect, useState } from "react";
import Introduce from "./introduce";

const Tweets = ({userObj}) => {
    const [tweet, setTweet] = useState("");
    const [tweets, setTweets] = useState([]);
    const [editing, setEditing] = useState(false);
    const [editTweet, setEditTweet] = useState("");
    useEffect (() => {
        dbService.collection("tweets").onSnapshot((snapshot) => {
            const tweetsArray = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            console.log(tweetsArray);
            setTweets(tweetsArray);
        });
    }, []);
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("tweets").add({
            text: tweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
        })
        setTweet("");
    };
    const OnChange = (event) => {
        const {target:{value}} = event;
        setTweet(value);
    };
    const onDeleteClick = async tweet2 => {
        const ok = window.confirm("삭제하시겠습니까?");
        if(ok) {
            await dbService.doc('tweets/'+tweet2.id).delete();
        }
    }
    const toggleEditing = (event) => {
        setEditing(prev => !prev)
        const {target:{value}} = event;
        setEditTweet(value);
    };
    const onEditChange = (event) => {
        const {target:{value}} = event;
        setEditTweet(value);
    }
    const onEditSumbit = async tweet => {
        await dbService.doc("tweets/"+tweet.id).update({
            text:editTweet
        });
        setEditing(false);
    }
    return(
        <div class="container">
            <div class="jumbotron">
                <form onSubmit={onSubmit} class="form-group">
                    <input value={tweet} onChange={OnChange} class="form-control" type="text" placeholder="게잼과 개발자들에게 격려할말" maxLength={120} />
                    <input class="form-control" type="submit" value="전송" />
                </form>
                <div>
                    {tweets.map(tweet => <div key={tweet.id}>
                        <h4>{tweet.text}</h4>
                        {editing ?
                        <>
                            <form onSubmit={() => onEditSumbit(tweet)}>
                                <input 
                                type="text" 
                                placeholder="new text" 
                                class="form-control" 
                                value={editTweet} 
                                onChange={onEditChange}
                                required>
                                </input>
                                <input type="submit" class="btn btn-success" value="update" value="수정" />
                                <button class="btn btn-default" onClick={toggleEditing}>취소</button>
                            </form>

                        </>:
                        <>{userObj.uid === tweet.creatorId &&
                            <>
                                <button onClick={() => onDeleteClick(tweet)} class="btn btn-danger">삭제</button>
                                <button onClick={toggleEditing} value={tweet.text} class="btn btn-primary">수정</button>
                            </>
                        }</>}
                    </div>)}
                </div>
            </div>
        </div>
    )
};

export default Tweets;