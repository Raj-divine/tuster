import { AppShell, Space, Text, Button } from "@mantine/core";
import AppHeader from "../components/AppHeader/AppHeader";
import { useLocalStorage } from "@mantine/hooks";
export default function Home() {
  const [colorScheme] = useLocalStorage({ key: "mantine-color-scheme" });
  return (
    <AppShell header={<AppHeader />}>
      <header className={colorScheme === "dark" ? "dark" : ""}>
        <div className="w-1/2 mt-20">
          <h1 className="uppercase font-bold text-8xl">
            Go beyond the
            <Text
              component="span"
              variant="gradient"
              className="font-bold text-8xl block"
              gradient={{ from: "#38D9A9", to: "#12B886", deg: 45 }}
            >
              horizon.
            </Text>
          </h1>
          <Space h={20} />
          <Text
            color="dimmed"
            component="h2"
            className="uppercase font-raleway text-2xl"
          >
            Bringing the best out of you
          </Text>
          <Space h={20} />

          <div className="flex">
            <Button
              size="md"
              radius="md"
              className="bg-teal-500 hover:bg-teal-600 font-normal text-lg tracking-wider dark:text-teal-100"
            >
              Let's start
            </Button>
            <Space w={20} />
            <Button
              size="md"
              radius="md"
              color="teal"
              variant="outline"
              className="text-teal-500 border-teal-500  text-lg tracking-wider font-normal"
            >
              login?
            </Button>
          </div>
        </div>
      </header>
    </AppShell>
  );
}
