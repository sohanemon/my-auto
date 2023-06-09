'use client';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useFilter from '@/store/filter';

interface SelectType {
  placeholder?: string;
  data?: any[];
  type?: 'manufactures' | 'categories' | 'deal type' | 'period' | 'sorting';
}

export function SelectComp({ placeholder, data, type }: SelectType) {
  const setSortingType = useFilter((s) => s.setSortingType);
  const setSelectedCategory = useFilter((s) => s.setSelectedCategory);

  function handleChange(value: any) {
    if (type === 'sorting') return setSortingType(value);
    if (type === 'categories') return setSelectedCategory(value);
  }

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className='w-full text-xs bg-white border-none rounded-lg shadow-sm whitespace-nowrap'>
        <SelectValue
          defaultValue={3 + 'test'}
          placeholder={placeholder || 'Nothing here'}
        />
      </SelectTrigger>
      <SelectContent className='bg-white max-h-80'>
        <SelectGroup>
          {type === 'categories' &&
            data?.map((el, idx) => (
              <SelectItem key={el.category_id} value={el.category_id}>
                {el.title}
              </SelectItem>
            ))}
          {type === 'manufactures' &&
            data?.map((el) => (
              <SelectItem key={el.man_id} value={el.man_id}>
                {el.man_name}
              </SelectItem>
            ))}
          {type === 'sorting' &&
            data?.map((el) => (
              <SelectItem key={el} value={el}>
                {el}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
