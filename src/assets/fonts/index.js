import { Inter, Raleway, Roboto, Edu_SA_Beginner } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });
export const Edusa = Edu_SA_Beginner({ subsets: ["latin"], variable: "--edu-sa" });
export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--raleway-font",
});
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--roboto-font",
});
