import BookDetail, { getBooks } from "@/app/components/book-detail-list";
import { Suspense } from "react";

interface IParams {
    params: { list_name_encoded: string };
}

type Params = Promise<{ list_name_encoded: string }>;

export async function generateMetadata({
    params: { list_name_encoded },
}: IParams) {
    const book = await getBooks(list_name_encoded);
    return {
        title: book.display_name,
    };
}

export default async function MovieDetailPage({
    params: { list_name_encoded },
}: IParams) {
    return (
        <div>
            <Suspense fallback={<h1>Loading Book Lists...</h1>}>
                <BookDetail list_name_encoded={list_name_encoded} />
            </Suspense>
        </div>
    );
}
