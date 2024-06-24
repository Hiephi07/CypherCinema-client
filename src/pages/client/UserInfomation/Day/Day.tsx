import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import Selectt, { StylesConfig } from 'react-select'
const days = [
  { id: '1', label: "1" },
  { id: '2', label: "2" },
  { id: '3', label: "3" },
  { id: '4', label: "4" },
  { id: '5', label: "5" },
  { id: '6', label: "6" },
  { id: '7', label: "7" },
  { id: '8', label: "8" },
  { id: '9', label: "9" },
  { id: '10', label: "10" },
  { id: '11', label: "11" },
  { id: '12', label: "12" },
  { id: '13', label: "13" },
  { id: '14', label: "14" },
  { id: '15', label: "15" },
  { id: '16', label: "16" },
  { id: '17', label: "17" },
  { id: '18', label: "18" },
  { id: '19', label: "19" },
  { id: '20', label: "20" },
  { id: '21', label: "21" },
  { id: '22', label: "22" },
  { id: '23', label: "23" },
  { id: '24', label: "24" },
  { id: '25', label: "25" },
  { id: '26', label: "26" },
  { id: '27', label: "27" },
  { id: '28', label: "28" },
  { id: '29', label: "29" },
  { id: '30', label: "30" },
  { id: '31', label: "31" }
]

const customStyles: StylesConfig = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#1a1d29',
    border: '1px solid #454D6A',
    color: 'red',
    borderRadius: '6px',
    padding: '2px',
    maxHeight: '36px',
    fontSize: '14.2px',
  }),
  // Tùy chỉnh các phần còn lại của dropdown tại đây nếu cần
};
   
const Day = () => {

  return (
    <>
    <Selectt classNamePrefix="custom-select"
      styles={customStyles} options={days} />
    </>
  )
}

export default Day
