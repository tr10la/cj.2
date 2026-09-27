"use client";

import { useState, type FormEvent } from "react";

export default function DashboardLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [enviant, setEnviant] = useState(false);

  const entrar = async (event: FormEvent) => {
    event.preventDefault();
    setEnviant(true);
    setError("");
    const response = await fetch("/api/dashboard/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const body = (await response.json().catch(() => null)) as { error?: string } | null;
    if (!response.ok) {
      setError(body?.error || "No s'ha pogut entrar.");
      setEnviant(false);
      return;
    }
    window.location.href = "/dashboard";
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f3f4f6", fontFamily: "system-ui, sans-serif", padding: "24px" }}>
      <form onSubmit={entrar} style={{ width: "100%", maxWidth: "380px", backgroundColor: "white", borderRadius: "12px", padding: "32px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}>
        <h1 style={{ marginTop: 0, fontSize: "24px" }}>Panell de Can Joan</h1>
        <p style={{ color: "#6b7280", fontSize: "14px" }}>Escriu la contrasenya per veure les reserves.</p>
        <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: 500 }}>Contrasenya</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoFocus
          style={{ width: "100%", padding: "10px", marginBottom: "16px", border: "1px solid #d1d5db", borderRadius: "6px", boxSizing: "border-box" }}
        />
        {error ? <p style={{ color: "#b91c1c", fontSize: "14px" }}>{error}</p> : null}
        <button type="submit" disabled={enviant} style={{ width: "100%", padding: "10px", backgroundColor: "#111827", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>
          {enviant ? "Entrant..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
