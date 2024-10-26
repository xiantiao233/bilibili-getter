const requestOptions = {
    method: "GET",
    redirect: "follow"
};

ml = 3301976027;

getMedias(1, ml)

function getMedias(pn, ml) {
    fetch("https://api.bilibili.com/x/v3/fav/resource/list?media_id="+ml+"&ps=20&platform=web&pn="+pn, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            const obj = JSON.parse(result.toString());
            const medias = obj.data.medias
            if (medias === null || medias === undefined) return
            for (let i = 0; i < medias.length; i++) {
                console.log("https://www.bilibili.com/video/"+medias[i].bvid)
            }
            getMedias(pn+1)
        })
        .catch((error) => console.error(error));
}
