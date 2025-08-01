fetch(
    "https://excellent-cheese-a20f6a488c.strapiapp.com/api/articles?populate=*"
)
    .then((res) => res.json())
    .then((articles) => {
        let articleList = articles.data
        articleList.forEach((article) => {
            console.log(article.cover.url)
        })
    })
    .catch((err) => console.error(err))
