"use client";

import Link from "next/link";
import styles from "../styles/book.module.css";

interface IBookProps {
    list_name_encoded: string;
}

export default function Book({ list_name_encoded }: IBookProps) {
    return (
        <div className={styles.book}>
            <Link href={`/detail/${list_name_encoded}`}>
                {list_name_encoded} 👉🏻
            </Link>
        </div>
    );
}
