"use client";
import React from "react";
import styles from "./page.module.css";
import { CldImage } from "next-cloudinary";

import { items } from "./data.js";
import { notFound } from "next/navigation";
import GlassCard from "@/components/GlassCard";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <div>
      {data.map((item) => (
        <div
          className={`${styles.item} flex gap-[50px] mt-6 mb-6`}
          key={item.id}
        >
          <GlassCard title={item.title} desc={item.desc} />
          {/* <div className="flex flex-1 flex-col ">
            <h1 className="text-[30px] text-lime">{item.title}</h1>
            <p className="text-[20px]">{item.desc}</p>
          </div> */}

          <div className="border-white border-4 rounded shadow-md">
            <CldImage
              className={styles.img}
              src={item.image}
              alt="Scubar"
              width="550"
              height="550"
              quality="100"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
