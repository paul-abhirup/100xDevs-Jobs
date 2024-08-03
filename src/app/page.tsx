import Homepage from "@/components/homepage";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
export default async function Home() {
  return (
    <>
      <Theme>
        <Homepage />
      </Theme>
    </>
  );
}
