import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

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
  useEffect(() => {
    window.location.replace("/copa/index.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0b0b0f", color: "#f5c451", fontFamily: "system-ui, sans-serif" }}>
      <p>Carregando portal da Copa do Mundo…</p>
    </div>
  );
}
