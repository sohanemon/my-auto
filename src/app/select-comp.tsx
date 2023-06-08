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

export function SelectComp() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue defaultValue={3 + 'test'} placeholder='Select something' />
      </SelectTrigger>
      <SelectContent className='bg-white'>
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
