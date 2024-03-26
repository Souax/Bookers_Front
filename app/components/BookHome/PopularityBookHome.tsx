import Image from "next/image";
import React from "react";
import styles from "./BookHome.module.css";
import { ApiResponse } from "@/types/types";

type PopularityBooks = {
  popularitybooks: ApiResponse;
};

const PopularityBook = ({ popularitybooks }: PopularityBooks) => {
  return (
    <>
      <div className={styles.book_title}>人気技術書</div>
      <div className={styles.book_look}>もっと見る</div>
      <div className={styles.line} />

      <div className="flex justify-center items-center pt-6">
        {popularitybooks.data.length > 1 && (
          <div className="flex flex-col items-center mx-5">
            <Image
              src={popularitybooks.data[1].params.largeImageUrl}
              alt="Image 1"
              width={150}
              height={50}
              className="rounded-t-md"
            />
            <div className="text-[0.6rem] text-white text-center pt-1">
              {popularitybooks.data[1].params.title}
            </div>
          </div>
        )}

        {popularitybooks.data.length > 2 && (
          <div className="flex flex-col items-center mx-5">
            <Image
              src={popularitybooks.data[2].params.largeImageUrl}
              alt="Image 2"
              width={150}
              height={50}
              className="rounded-t-md"
            />
            <div className="text-[0.6rem] text-white text-center pt-1">
              {popularitybooks.data[2].params.title}
            </div>
          </div>
        )}

        {popularitybooks.data.length > 3 && (
          <div className="flex flex-col items-center mx-5">
            <Image
              src={popularitybooks.data[3].params.largeImageUrl}
              alt="Image 1"
              width={150}
              height={50}
              className="rounded-t-md"
            />
            <div className="text-[0.6rem] text-white text-center pt-1">
              {popularitybooks.data[3].params.title}
            </div>
          </div>
        )}
      </div>

      {/* 二段目 */}
      <div className="flex justify-center items-center pt-6">
        {popularitybooks.data.length > 4 && (
          <div className="flex flex-col items-center mx-5">
            <Image
              src={popularitybooks.data[4].params.largeImageUrl}
              alt="Image 1"
              width={150}
              height={50}
              className="rounded-t-md"
            />
            <div className="text-[0.6rem] text-white text-center pt-1">
              {popularitybooks.data[4].params.title}
            </div>
          </div>
        )}

        {popularitybooks.data.length > 5 && (
          <div className="flex flex-col items-center mx-5">
            <Image
              src={popularitybooks.data[5].params.largeImageUrl}
              alt="Image 1"
              width={150}
              height={50}
              className="rounded-t-md"
            />
            <div className="text-[0.6rem] text-white text-center pt-1">
              {popularitybooks.data[5].params.title}
            </div>
          </div>
        )}

        {popularitybooks.data.length > 6 && (
          <div className="flex flex-col items-center mx-5">
            <Image
              src={popularitybooks.data[6].params.largeImageUrl}
              alt="Image 1"
              width={150}
              height={50}
              className="rounded-t-md"
            />
            <div className="text-[0.6rem] text-white text-center pt-1">
              {popularitybooks.data[6].params.title}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default PopularityBook;
