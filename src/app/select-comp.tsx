import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SelectType {
  placeholder: string;
  data?: any[];
}

export function SelectComp({ placeholder, data }: SelectType) {
  return (
    <Select>
      <SelectTrigger className='text-xs bg-white border-none rounded-lg shadow-sm w-max'>
        <SelectValue
          defaultValue={3 + 'test'}
          placeholder={placeholder || 'Nothing here'}
        />
      </SelectTrigger>
      <SelectContent className='bg-white '>
        <SelectGroup>
          {data?.map((el, idx) => (
            <SelectItem key={el.category_id} value={el.seo_title}>
              {el.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
