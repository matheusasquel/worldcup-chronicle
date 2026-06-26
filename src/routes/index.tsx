import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Copa do Mundo FIFA (1930–2022) — Portal Histórico" },
      { name: "description", content: "A história completa da Copa do Mundo FIFA de 1930 a 2022: campeões, finais, estatísticas, troféus e linha do tempo." },
      { property: "og:title", content: "Copa do Mundo FIFA (1930–2022)" },
      { property: "og:description", content: "Portal histórico completo das 22 edições da Copa do Mundo FIFA." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/copa/index.html"
      title="Copa do Mundo FIFA"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
      }}
    />
  );
}
