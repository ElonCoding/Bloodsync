import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{
    role: "assistant" | "user";
    content: string;
  }[]>([
    {
      role: "assistant",
      content:
        "Hello! I’m the BloodSync assistant. Ask me about donation eligibility, nearby camps, or emergency preparedness.",
    },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMessages((m) => [...m, { role: "user", content: input.trim() }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "Thanks! I will soon provide AI-powered guidance and alerts. For now, explore the platform features on the homepage.",
        },
      ]);
    }, 500);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open && (
        <div className="mb-2 w-80 overflow-hidden rounded-xl border bg-background shadow-xl">
          <div className="flex items-center justify-between border-b bg-gradient-to-r from-rose-500/10 to-red-600/10 px-3 py-2">
            <div className="text-sm font-semibold">BloodSync Assistant</div>
            <button
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
          <div className="max-h-80 space-y-3 overflow-y-auto p-3">
            {messages.map((m, i) => (
              <div key={i} className={`text-sm ${m.role === "user" ? "text-right" : "text-left"}`}>
                <span
                  className={`inline-block rounded-lg px-3 py-2 ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {m.content}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-2 border-t p-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 rounded-md border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary"
            />
            <Button size="sm" onClick={send}>
              Send
            </Button>
          </div>
        </div>
      )}
      <Button size="lg" className="h-12 rounded-full bg-gradient-to-r from-rose-500 to-red-600 shadow-lg" onClick={() => setOpen((v) => !v)}>
        {open ? "Hide Chat" : "Chat"}
      </Button>
    </div>
  );
}
