import { Month, getMonth, getYear, isBefore, isFriday, isMonday, isSaturday, isSunday, isThursday, isTuesday, isWednesday, startOfDay, startOfMonth } from "date-fns";
import { ReactNode, createContext, useMemo, useState } from "react";
import { Formatters } from "react-day-picker";

export interface BookTicketStepone_Type {
    date: Date | undefined;
    setDate: React.Dispatch<React.SetStateAction<Date | undefined >>;
    formatDayofWeek: Partial<Formatters>;
    formatMonthofYear: Partial<Formatters>;
    disabledPastMonth: (month: Date) => boolean
}

interface ProviderProps {
    children: ReactNode;
  }

export const BookTicketStepone_Context = createContext<BookTicketStepone_Type | undefined>(undefined)

const BookTicketStepone_Provider = ({children}: ProviderProps) => {

    const [date, setDate] = useState<Date | undefined>(new Date())

    // Format lại các thứ trong tuần
    const formatDayofWeek: Partial<Formatters> = useMemo(() => {
        return {
            formatWeekdayName: (day) => {
                if (isMonday(day)) {
                    return "2";
                } else if (isTuesday(day)) {
                    return "3";
                } else if (isWednesday(day)) {
                    return "4";
                } else if (isThursday(day)) {
                    return "5";
                } else if (isFriday(day)) {
                    return "6";
                } else if (isSaturday(day)) {
                    return "7";
                } else if (isSunday(day)) {
                    return "CN";
                } else {
                    return "";
                }
            },
        }
    }, []);

    // Format lại các tháng trong năm
    const formatMonthofYear: Partial<Formatters> = useMemo(() => {
        return {
            formatMonthCaption: (month: Date) => {
                const monthIndex = getMonth(month); // Lấy chỉ số tháng từ 0 đến 11
                const monthNames = ["THG 1", "THG 2", "THG 3", "THG 4", "THG 5", "THG 6", "THG 7", "THG 8", "THG 9", "THG 10", "THG 11", "THG 12"];
                return monthNames[monthIndex]; // Trả về tên tháng tương ứng
            }
        };
    }, []);

    // Disable những tháng đã qua
    const disabledPastMonth = (date: Date) => {
        const today = startOfDay(new Date()) //Lấy ngày hiện tại
        const currentYear = getYear(today);
        const targetYear = getYear(date);
        const startOfMonthDate = startOfMonth(today)

         if (targetYear < currentYear) {
            return true;
        }
        if (targetYear === currentYear && date.getMonth() < startOfMonthDate.getMonth()) {
            return true;
        }
        if (date.getMonth() === startOfMonthDate.getMonth() && targetYear === currentYear && isBefore(date, today)) {
            return true;
        }
        return false;
    }



    return <BookTicketStepone_Context.Provider value={{date, setDate, formatDayofWeek, formatMonthofYear , disabledPastMonth}}>{children}</BookTicketStepone_Context.Provider>
}

export default BookTicketStepone_Provider