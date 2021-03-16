import { ChangeEvent, useState } from 'react'
import tw, { styled } from 'twin.macro'
import { Text } from '.'

const ToggleWrapper = styled.div`
  ${tw`relative`}

  .toggle__dot {
    top: -0.25rem;
    left: -0.25rem;
    transition: all 0.3s ease-in-out;
  }

  input:checked ~ .toggle__dot {
    ${tw`bg-gray-800 dark:bg-red-300 transform translate-x-full`}
  }
`

type ToggleProps = {
  checked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  name: string
  text?: string
}

export const Toggle: React.FC<ToggleProps> = ({
  checked,
  name,
  onChange,
  text,
}) => {
  const [isChecked, setIsChecked] = useState(checked)

  return (
    <label
      htmlFor={name}
      tw='flex items-center cursor-pointer'
      onClick={() => {
        setIsChecked(!isChecked)
      }}
      role='button'
    >
      <ToggleWrapper>
        <input
          id={name}
          type='checkbox'
          tw='hidden'
          onChange={onChange}
          checked={checked}
        />
        <div
          className='toggle__line'
          tw='w-10 h-4 bg-gray-400 rounded-full shadow-inner'
        />
        <div
          className='toggle__dot'
          tw='absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0'
        />
      </ToggleWrapper>
      <div tw='ml-3 font-medium'>
        <Text>{text}</Text>
      </div>
    </label>
  )
}
