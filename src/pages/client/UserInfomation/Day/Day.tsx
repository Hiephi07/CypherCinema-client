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


   
const Day = () => {
    const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')
  return (
    <>
    <Select>
      <SelectTrigger  className=" bg-#1a1d29 border-[1px] border-solid border-#454D6A text-#fff rounded-[6px] p-[9px] max-h-9 text-[14.2px]">
        <SelectValue placeholder="Select a fruit" className="bg-#1a1d29" />
      </SelectTrigger>
      <SelectContent className="bg-#1a1d29 " >
        <SelectGroup className="">
          
          <SelectLabel className="text-#fff">Vui lòng chọn</SelectLabel>
          {days.map((day) => (
            <SelectItem asChild={false}  key={day.id} value={day.id} className=" text-#fff hover:text-#fff hover:bg-#72be43">{day.label}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
    </>
  )
}

export default Day
