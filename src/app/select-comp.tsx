import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SelectType {
  placeholder?: string;
  data?: any[];
  type?: 'manufactures' | 'categories' | 'deal type' | 'period' | 'sorting';
}

export function SelectComp({ placeholder, data, type }: SelectType) {
  return (
    <Select>
      <SelectTrigger className='w-full text-xs bg-white border-none rounded-lg shadow-sm whitespace-nowrap'>
        <SelectValue
          defaultValue={3 + 'test'}
          placeholder={placeholder || 'Nothing here'}
        />
      </SelectTrigger>
      <SelectContent className='bg-white '>
        <SelectGroup>
          {type === 'categories' &&
            data?.map((el, idx) => (
              <SelectItem key={el.category_id} value={el.seo_title}>
                {el.title}
              </SelectItem>
            ))}
          {type === 'manufactures' &&
            data?.map((el, idx) => (
              <SelectItem key={el.man_id} value={el.man_id}>
                {el.man_name}
              </SelectItem>
            ))}
          {type === 'sorting' &&
            data?.map((el, idx) => (
              <SelectItem key={el} value={el}>
                {el}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
