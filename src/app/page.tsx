import Image from "next/image";
import bannerImage from "../../public/5.jpg"
import Header from "@/components/layout/Header";
import ProductGrid from "@/components/landing/ProductGrid";

export default function Home() {
  return (
      <>
        <Header

        />

        <div className="flex justify-center items-center mt-10 border-2 bg-cp">
          <Image 
            width={1150}
            height={300}
            alt="Store Image"
            src={bannerImage}
          />
        </div>

        <ProductGrid/>
      </>
  );
}
