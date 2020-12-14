const form = document.querySelector('#searchForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`
        , { params: { q: searchTerm }, headers: {} });
    makeImg(res.data);
    form.elements.query.value = '';
})

const makeImg = (shows) => {
    for (let res of shows) {
        if (res.show.image) {
            const imgData = res.show.image.medium;
            const img = document.createElement('img');
            img.src = imgData;
            document.body.append(img);
        }
    }
} 