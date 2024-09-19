"use client";
import qs from "query-string";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useDebounce } from "usehooks-ts";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
export const SearchInput = () => {
    const router =useRouter();
    const [value, setValue] =useState();
    const debouncedValue = useDebounce(value, 500);
    const  handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value);
    }
    useEffect(()=>{
        const url=qs.stringifyUrl({
            url:"/",
            query:{
                search:debouncedValue,
            },
        },{skipNull:true,skipEmptyString:true});
        router.push(url);
    },[debouncedValue,router]);
  return (
    <div className="w-full relative">
      <Search
        className=" absolute top-1/2 left-3 transfrom 
             -translate-y-1/2 text-muted-foreground h-4 w-4"
      />
      <Input
        className="w-full max-w-[516] pl-9"
        placeholder="Search board"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};
