import * as Select from '@radix-ui/react-select';
import { FiChevronDown } from 'react-icons/fi';

export default function Dropdown() {
  return (
    <>
      <p className='font-semibold text-themeBlack'>გარიგების ტიპი</p>
      <Select.Root>
        <Select.Trigger className='flex items-center justify-between w-full h-10 px-3 border rounded-lg border-themeGray'>
          <Select.Value placeholder='იყიდება' />
          <Select.Icon>
            <FiChevronDown />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content>
            <Select.ScrollUpButton />
            <Select.Viewport>
              {Array.from(Array(5).keys()).map((el, idx) => (
                <Select.Item key={idx} value='test+idx'>
                  <Select.ItemText>Test {idx}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
            <Select.ScrollDownButton />
            <Select.Arrow />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </>
  );
}
