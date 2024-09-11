"use strict";
fetch("https://eskuvo-anett.nemestamas.hu/api/youtube/")
    .then(response => {
    response.json()
        .then(res => {
        res.forEach((song) => {
            console.log(song);
        });
    });
})
    .catch(error => {
    console.log(error.message);
});
