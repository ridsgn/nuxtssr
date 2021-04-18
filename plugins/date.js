export default ({ app }, inject) => {
  inject("date", string => {
    const date = new Date(Date.parse(string));
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };

    return date.toLocaleDateString("id-ID", options);
  });
};
