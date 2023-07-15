"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className={styles.searchBar}
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search keywords..."
        className={styles.searchBar__input}
      />
      <button
        disabled={!search}
        type="submit"
        className={styles.searchBar__button}
      >
        Search
      </button>
    </form>
  );
}