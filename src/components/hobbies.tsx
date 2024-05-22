import { MyList } from './my-list'

export const Hobbies: React.FC = () => {
  return (
    <MyList
      items={[
        {
          icon: '🍿',
          iconLabel: 'pop corns',
          text: 'I like movies',
        },
        {
          icon: '🎸',
          iconLabel: 'guitar',
          text: (<span>
            I play <a className='link link-secondary link-hover' target="_blank" href="https://www.youtube.com/watch?v=L2i8sQHUWEs">fingerstyle guitar</a>
          </span>),
        },
        {
          icon: '🥳',
          iconLabel: 'partying with people',
          text: 'People',
        },
      ]}
    />
  )
}
