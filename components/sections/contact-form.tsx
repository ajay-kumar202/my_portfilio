"use client";

import { type FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
};

const defaultState: FormState = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  message: ""
};

export function ContactForm() {
  const [state, setState] = useState<FormState>(defaultState);
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!state.name || !state.email || !state.message) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setState(defaultState);
  }

  return (
    <form onSubmit={onSubmit} className="bento-card grid gap-4 p-6 md:grid-cols-2">
      <Input label="Name" value={state.name} onChange={(v) => onChange("name", v)} required />
      <Input label="Email" type="email" value={state.email} onChange={(v) => onChange("email", v)} required />
      <Input label="Company" value={state.company} onChange={(v) => onChange("company", v)} />
      <Input label="Project Type" value={state.projectType} onChange={(v) => onChange("projectType", v)} />
      <Input label="Budget" value={state.budget} onChange={(v) => onChange("budget", v)} />
      <label className="flex flex-col gap-2 md:col-span-2">
        <span className="text-sm text-muted">Message</span>
        <textarea
          value={state.message}
          onChange={(e) => onChange("message", e.target.value)}
          className="min-h-28 rounded-xl border border-border bg-bg px-3 py-2"
          required
        />
      </label>
      <div className="md:col-span-2 flex items-center justify-between">
        <button type="submit" className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-black">
          Send Inquiry
        </button>
        {status === "error" ? <p className="text-sm text-red-400">Please fill required fields.</p> : null}
        {status === "success" ? <p className="text-sm text-accent">Thanks! We will get back shortly.</p> : null}
      </div>
    </form>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  required = false
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm text-muted">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-border bg-bg px-3 py-2"
        required={required}
      />
    </label>
  );
}
