import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";

const webRoot = join(dirname(fileURLToPath(import.meta.url)), "..");

describe("user message whitespace formatting contract (Issue #8)", () => {
	it("preserves newlines and spacing in user message bubbles using whitespace-pre-wrap break-words", () => {
		const src = readFileSync(join(webRoot, "src/canvas/chat-card-node.tsx"), "utf8");
		// Verify that user message rendering container includes whitespace-pre-wrap and break-words
		assert.ok(src.includes("m.role === 'user'"), "chat-card-node must handle m.role === 'user'");
		assert.ok(
			src.includes("whitespace-pre-wrap break-words"),
			"user message bubble in chat-card-node must include whitespace-pre-wrap break-words to preserve line breaks",
		);
	});
});
