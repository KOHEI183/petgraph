import { EcLandingPage } from "@/components/ecosystems/EntryPoint.tsx";

export default function Home() {
  return <EcLandingPage />;
}
export const getStaticProps = async () => ({
  props: {},
});
