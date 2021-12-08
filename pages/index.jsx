import Head from "next/head";
import { useEffect, useState } from "react";
import {
  Blogs,
  Counter,
  Features,
  Modal,
  Slider,
  Testimonials,
  Welcome,
} from "../components";

export default function Home() {
  const [modal, setmodal] = useState(true);

  const closemodal = () => {
    setmodal(false);
  };
  return (
    <div className="relative">
      {modal && <Modal closemodal={closemodal} />}
      <Slider />
      <Welcome />
      <Features />
      <Testimonials />
      <Counter />
      <Blogs />
    </div>
  );
}
