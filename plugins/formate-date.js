import Vue from "vue";

Vue.filter("formatDate", (dateStr) => {
  if (dateStr) {
    return Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(dateStr));
  } else return null;
});

Vue.filter("formatDateGetYear", (dateStr) =>
  Intl.DateTimeFormat("en-US", {
    year: "numeric",
  }).format(new Date(dateStr))
);
