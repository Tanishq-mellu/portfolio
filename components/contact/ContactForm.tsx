"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <form className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm text-foreground/70"
        >
          Name
        </label>

        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          autoComplete="name"
          required
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm text-foreground/70"
        >
          Email
        </label>

        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          required
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm text-foreground/70"
        >
          Message
        </label>

        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your research, project, or collaboration."
          rows={6}
          required
        />
      </div>

      <Button
        type="submit"
        className="
          h-12
          rounded-xl
          bg-[#65FF9A]
          px-6
          text-[#08120F]
          hover:brightness-110
        "
      >
        Send Message
      </Button>
    </form>
  );
}