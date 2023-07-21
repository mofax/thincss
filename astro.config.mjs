import { defineConfig } from "astro/config";

import rehypePrettyCode from "rehype-pretty-code";

const prettyCodeOptions = {
    theme: "solarized-dark",
    onVisitLine(node) {
        if (node.children.length === 0) {
            node.children = [
                {
                    type: "text",
                    value: " ",
                },
            ];
        }
    },
    onVisitHighlightedLine(node) {
        node.properties.className.push("highlighted");
    },
    onVisitHighlightedWord(node) {
        node.properties.className = ["word"];
    },
    tokensMap: {},
};

// https://astro.build/config
export default defineConfig({
    markdown: {
        extendDefaultPlugins: true,
        syntaxHighlight: false,
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
    },
});
