
const useDate = (data) => {
    const dateObject = new Date(data);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const year = dateObject.getFullYear();
    const monthIndex = dateObject.getMonth();
    const day = dateObject.getDate();

   return `on ${months[monthIndex]} ${day}, ${year}`;
}
export { useDate };