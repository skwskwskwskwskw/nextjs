import BookDetail, { getBooks } from "@/app/components/book-detail-list";
import { Suspense } from "react";

type IParams = Promise<{ list_name_encoded: string }>;

export async function generateMetadata({ params }: { params: IParams }) {
    const { list_name_encoded } = await params;
    const book = await getBooks(list_name_encoded);
    return {
        title: book.display_name,
    };
}

export default async function MovieDetailPage({ params }: { params: IParams }) {
    const { list_name_encoded } = await params;
    return (
        <div>
            <Suspense fallback={<h1>Loading Book Lists...</h1>}>
                <BookDetail list_name_encoded={list_name_encoded} />
            </Suspense>
        </div>
    );
}
