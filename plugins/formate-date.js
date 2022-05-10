import Vue from "vue";

Vue.filter("formatDate", (dateStr) =>
  Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(dateStr))
);

Vue.filter("formatDateGetYear", (dateStr) =>
  Intl.DateTimeFormat("en-US", {
    year: "numeric",
  }).format(new Date(dateStr))
);
