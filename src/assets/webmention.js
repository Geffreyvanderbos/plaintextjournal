(function () {
  "use strict";

  function getCfg(key, dfl) {
    return document.currentScript.getAttribute("data-" + key) || dfl;
  }

  const refurl = getCfg("page-url", window.location.href.replace(/#.*$/, ""));
  const containerID = getCfg("id", "webmentions");

  function stripurl(url) {
    return url.substr(url.indexOf("//"));
  }

  function dedupe(mentions) {
    const filtered = [];
    const seen = {};

    mentions.forEach(function (r) {
      const source = stripurl(r.url);
      if (!seen[source]) {
        filtered.push(r);
        seen[source] = true;
      }
    });

    return filtered;
  }

  function formatComments(comments) {
    const headline = `<h2>== Responses (via Webmention[<a href="https://indieweb.org/Webmention" class="ignore-external-link" title="Read what a Webmention is">?</a>])</h2>`;
    const markup = comments
      .map((c) => {
        // let source = c.author && c.author.name ? c.author.name : c.url.split("/")[2];
        let source = c.author && c.author.name ? `<a href="${c.url}">${c.author.name}</a>` : stripurl(c.url).split("/")[2];
        let comment = c.content && c.content.text ? c.content.text.substring(0, 240) + (c.content.text.length > 240 ? "..." : "") : "Limited";

        return `<li><a href="">${source}</a> commented "${comment}"</li>`;
      })
      .join("");
    return `${headline}<ul class="comments no-list-style">${markup}</ul>`;
  }

  function showLoadingIndicator() {
    const container = document.getElementById(containerID);
    if (container) {
      container.innerHTML = "Loading Webmentions <span id='loading-indicator'>&#9608;</span>";
      let isBlinking = true;
      setInterval(function () {
        const indicator = document.getElementById('loading-indicator');
        if (indicator) {
          indicator.style.visibility = isBlinking ? 'hidden' : 'visible';
          isBlinking = !isBlinking;
        }
      }, 200);
    }
  }

  window.addEventListener("load", async function () {
    showLoadingIndicator();

    const container = document.getElementById(containerID);
    if (!container) {
      return;
    }

    let apiURL = `https://webmention.io/api/mentions.jf2?per-page=30&sort-by=published&sort-dir=up&target[]=${encodeURIComponent(
      "http:" + stripurl(refurl)
    )}&target[]=${encodeURIComponent("https:" + stripurl(refurl))}`;

    let json = {};
    try {
      const response = await window.fetch(apiURL);
      if (response.status >= 200 && response.status < 300) {
        json = await response.json();
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error("Request failed", error);
    }

    let comments = [];
    let collects = [];

    json.children.forEach(function (child) {
      if (child["wm-property"] === "in-reply-to" || child["wm-property"] === "mention-of") {
        comments.push(child);
      } else if (["like-of", "repost-of", "bookmark-of"].includes(child["wm-property"])) {
        collects.push(child);
      }
    });

    let formattedComments = "";
    if (comments.length > 0) {
      formattedComments = formatComments(dedupe(comments));
    }

    let reactions = "";
    if (collects.length > 0) {
      collects.forEach(function (reaction) {
        let source = reaction.author && reaction.author.name ? reaction.author.name : reaction.url.split("/")[2];
        let reactionType = reaction["wm-property"].replace("-of", "");
        reactions += `<li>${source} ${reactionType}d this note.</li>`;
      });
      reactions = `<ul class="reacts no-list-style">${reactions}</ul>`;
    }

    if (formattedComments || reactions) {
      container.innerHTML = `${formattedComments}${reactions}`;
    } else {
      container.innerHTML = `<p>No responses yet. Send a Webmention[<a href="https://indieweb.org/Webmention" class="ignore-external-link" title="Read what a Webmention is">?</a>].</p>`;
    }
  });
})();
