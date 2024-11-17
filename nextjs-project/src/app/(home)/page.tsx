import Book from "../components/book-list";
import styles from "../styles/home.module.css";

export const metadata = {
    title: "Home",
};

export const API_URL = "https://books-api.nomadcoders.workers.dev/lists";

async function getBooks() {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}
interface IBook {
    copyright: string;
    num_results: number;
    results: any[];
    status: string;
}

export default async function HomePage() {
    const books: IBook = await getBooks();
    return (
        <div className={styles.container}>
            <h1>The New York Times Best Seller Explorer</h1>
            <div className={styles.book_list_container}>
                {books?.results.map((book) => (
                    <Book
                        key={book.list_name_encoded}
                        list_name_encoded={book.list_name_encoded}
                    />
                ))}
            </div>
        </div>
    );
}
