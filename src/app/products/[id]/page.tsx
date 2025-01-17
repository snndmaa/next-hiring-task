"use client"
import ProductDetail from '@/components/product/ProductDetail';
import React from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Loading from '@/components/ui/Loading';


function Page() {
  const { id } = useParams();
  if (!id) {
    return <Loading />
  }

  return (
    <>
      <Header />
      <ProductDetail
        params={{ id }}
      />
    </>
  );
}

export default Page;