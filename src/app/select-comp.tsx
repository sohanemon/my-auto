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
}

export function SelectComp({ placeholder }: SelectType) {
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
          {Array.from(Array(5)).map((el, idx) => (
            <SelectItem key={idx} value={idx + 'test'}>
              Test {idx}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
