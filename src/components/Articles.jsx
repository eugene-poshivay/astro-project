import { useEffect, useState } from 'react'
import styles from './articles.module.css'

export default function Articles() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await fetch(
                    'https://excellent-cheese-a20f6a488c.strapiapp.com/api/articles?populate=*'
                )
                if (!res.ok) throw new Error('Fetch failed')
                const info = await res.json()
                setArticles(info.data)
            } catch (err) {
                console.error('Error fetching articles:', err)
            }
        }

        fetchArticles()
    }, [])

    return (
        <ul>
            {articles.map((article) => (
                <li key={article.id}><h3 className={styles.article} >{article.title}</h3>
                    <img width="200" src={article.cover.url} alt="" />
                </li>
            ))}
        </ul>
    )
}
