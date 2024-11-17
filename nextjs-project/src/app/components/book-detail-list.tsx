import styles from "../styles/detail.module.css";

interface IParams {
    params: { list_name_encoded: string };
}
export async function generateMetadata({
    params: { list_name_encoded },
}: IParams) {
    const movie = await getBooks(list_name_encoded);
    return {
        title: movie.title,
    };
}
export const API_URL = "https://books-api.nomadcoders.workers.dev/list?name=";

export async function getBooks(list_name_encoded: string) {
    const response = await fetch(`${API_URL}${list_name_encoded}`);
    const json = await response.json();
    return json.results;
}
interface IBookResult {
    bestsellers_date: string;
    books: any[];
    display_name: string;
    list_name: string;
    published_date: string;
}

export default async function BookDetail({
    list_name_encoded,
}: {
    list_name_encoded: string;
}) {
    const books: IBookResult = await getBooks(list_name_encoded);
    const onClickBuyBtn = () => {};
    return (
        <div className={styles.container}>
            <h1>{books.display_name}</h1>
            <div className={styles.book_list_container}>
                {books?.books.map((book) => {
                    return (
                        <div className={styles.book_list}>
                            <img src={book.book_image} alt={book.title} />
                            <div className={styles.book_info}>
                                <p>{book.title}</p>
                                <p>{book.author}</p>
                                <a href={book.amazon_product_url}>Buy now</a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
