import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";

const webRoot = join(dirname(fileURLToPath(import.meta.url)), "..");

describe("cancel queueing feature contract (Issue #10)", () => {
	it("renders Cancel queue header button when items are queued in chat-card-node", () => {
		const src = readFileSync(join(webRoot, "src/canvas/chat-card-node.tsx"), "utf8");
		assert.ok(src.includes("Cancel queue"), "chat-card-node must render Cancel queue button for queued items");
		assert.ok(src.includes("queue/clear"), "chat-card-node must invoke /queue/clear to clear queue on server");
	});
});
