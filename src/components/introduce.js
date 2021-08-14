import React, { useEffect, useState } from "react";
import img from "./background.jpg"
import { youtube_api_key } from "YoutubeApi";
import logo from "./gajam_profile.jpg"

const Introduce = () => {
    const [SubScribers, setSubScribers] = useState(0)
    useEffect(() => {
        const key = youtube_api_key;
        const channelId = "UCKZQlHJtAIqOSDREFOa0u7w";
        let url = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id="+channelId+"&fields=items/statistics&key="+key;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            data.items.map((item) => {
                console.log(item.statistics.subscriberCount);
                setSubScribers(item.statistics.subscriberCount);
            });
        })
    })
    const goYoutube = () => {
        window.location.href = "https://www.youtube.com/channel/UCKZQlHJtAIqOSDREFOa0u7w";
    }
    const goDiscord = () => {
        window.location.href = "https://discord.gg/FFb3QqQr";
    }
    return (
        <>
            <img src={img} class="background-image" alt="뒷배경 이미지" width="100%" />
            <div class="container mar-5 font">
                <img src={logo} alt="게잼 로고" width="100" />
                <h1 class="font">게잼 - (Gajam)</h1>
                <h2 class="font">현재 {SubScribers}명의 구독자가 게잼을 시청중!</h2>
            </div>
            <div class="container mar-1 font">
                <h4>
                게잼은 중학교 3학년의 유니티 프로그래머입니다.<br />
                현재 유튜브와 디스코드를 운영하고 있으며,<br />
                프로그래밍 능력이 앞으로 나아질 것입니다.<br />
                구독자 1000명일때가 엊그제 같은데 시간이 참 빠르네요.<br />
                아래에 격려하는 말을 써서 게잼과 개발자들을 응원해 주세요!<br />
                </h4>
            </div>
            <div class="container mar-5">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/D61Ry1LSxrU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/-QRyR7rTtJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="container mar-5">
                <button class="btn button2 btn-danger mar-1" onClick={goYoutube}>Youtube</button>
                <button class="btn button2 btn-dark" onClick={goDiscord}>Discord</button>
            </div>
        </>
    )
}

export default Introduce;