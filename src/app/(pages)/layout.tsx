import React from "react";
import Navbar from "@/components/layout/LangBar";
import Footer from "@/components/layout/Footer";

export default function SetupLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
        <>
            { children }
        </>
	);
}
