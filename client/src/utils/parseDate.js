
import moment from "moment";

export default function parseDate(databaseDate) {
    const date = databaseDate.split("T")[0].split("-");
    const currentDate = new Date(date);
    const stringDate = moment(currentDate).format('MMM DD, YYYY').toLowerCase();

    return stringDate;
};